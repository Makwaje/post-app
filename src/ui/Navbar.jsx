import { Link } from "react-router-dom";
import tw from "twin.macro";
import { useUser } from "../contexts/UserContext";
import Logout from "../features/Authentication/Logout";
import ToggleTheme from "./ToggleTheme";

const Username = tw.h2`
font-semibold
`;

function Navbar() {
  const { user, setUser } = useUser();

  return (
    <div className="navbar sticky mr-20 flex items-center justify-between rounded-lg bg-base-100 drop-shadow-lg">
      <Username>{user}</Username>
      <Link to="/" className="btn btn-ghost text-xl normal-case">
        Post-App
      </Link>
      <div className="flex">
        <ToggleTheme />
        <Logout />
      </div>
    </div>
  );
}

export default Navbar;
