import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./ui-core/components";
import { Home, WatchList } from "./ui-core/templates";
import { MensClothing } from "./ui-core/templates";
import { WomensClothing } from "./ui-core/templates";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const MensClothingCategory: React.FC = () => {
  return <MensClothing />;
};

const WomensClothingCategory: React.FC = () => {
  return <WomensClothing />;
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ReactQueryDevtools />
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens-clothing" element={<MensClothingCategory />} />
            <Route
              path="/womens-clothing"
              element={<WomensClothingCategory />}
            />
            <Route
              path="/watchlist"
              element={
                <SignedIn>
                  <WatchList />
                </SignedIn>
              }
            />{" "}
            <Route
              path="*"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
