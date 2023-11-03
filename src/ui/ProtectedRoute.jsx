import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Loading from "./Loading";

function ProtectedRoute() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(
    function () {
      if (!user) navigate("/login");
    },
    [user, navigate],
  );

  if (!user) return <Loading />;
}

export default ProtectedRoute;
