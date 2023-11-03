import { LucideFeather, LucideGalleryVerticalEnd } from "lucide-react";
import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <>
      <div className="btm-nav btm-nav-lg bg-base-200 drop-shadow-2xl">
        <NavLink to="/posts">
          <button className="flex flex-col items-center justify-center font-bold">
            <LucideGalleryVerticalEnd />
            <span className="btm-nav-label">Posts</span>
          </button>
        </NavLink>
        <NavLink to="/create">
          <button className="flex flex-col items-center justify-center font-bold ">
            <LucideFeather />

            <span className="btm-nav-label">Create post</span>
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default BottomNav;
