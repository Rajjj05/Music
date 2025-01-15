import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  console.error("Clerk publishable key is missing.");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      afterSignOutUrl="/"
      afterSignInUrl="/"
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
