import { ClerkProvider, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartProvider } from "../context/CartContext";
import { Navbar } from "../ui-core/components";
import "../App.css";
import { WatchlistProvider } from "../context/WatchListContext";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <CartProvider>
          <WatchlistProvider>
            <Navbar />
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <main className={roboto.className}>
              <Component {...pageProps} />
            </main>
          </WatchlistProvider>
        </CartProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;
