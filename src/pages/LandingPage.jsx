import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import ToggleTheme from "../ui/ToggleTheme";

function LandingPage() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="p-2">
              <ToggleTheme />
            </div>
            <h1 className="text-5xl font-bold">POST-APP</h1>
            <p className="py-6">Post whatever you want! </p>
            <Link to="/login">
              <button className="btn btn-primary">Get Started!</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
