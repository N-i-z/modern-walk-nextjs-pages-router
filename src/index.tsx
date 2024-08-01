import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
// import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from "@clerk/clerk-react";
import { WatchlistProvider } from "./context/WatchListContext.tsx";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY as string;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey}>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </ClerkProvider>
    </React.StrictMode>
  );

  // reportWebVitals();
} else {
  console.error(
    'Root element not found. Please check your HTML file for an element with id="root".'
  );
}
