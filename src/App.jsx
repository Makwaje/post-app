import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import Watchlist from "./pages/Watchlist";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

// eslint-disable-next-line no-unused-vars
const colors = {
  "natural-200": "#E5E5E5",
  "blue-950": "#172554",
  "indigo-950": "#1e1b4b",
  "amber-950": "#f59e0b",
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<Account />} />
          </Route>

          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          styles: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-gray-0)",
            color: "var(--color-gray-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
