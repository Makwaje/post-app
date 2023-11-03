import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

function AppLayout() {
  return (
    <>
      <ProtectedRoute />
      <Navbar />
      <Outlet />
      <BottomNav />
    </>
  );
}

export default AppLayout;
