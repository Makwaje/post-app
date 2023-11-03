import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./contexts/UserContext.jsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <App />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
