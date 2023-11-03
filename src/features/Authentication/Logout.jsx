import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

function Logout() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    setUser("");
    navigate("/login");
  }
  return (
    <button onClick={handleLogout} className="btn btn-ghost">
      <LogOutIcon />
    </button>
  );
}

export default Logout;
