import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import CreatePostPage from "./pages/CreatePostPage";
import { default as LandingPage } from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />

          <Route element={<AppLayout />}>
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Route>

          <Route path="/login" element={<AuthPage />} />
          <Route path="/*" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
