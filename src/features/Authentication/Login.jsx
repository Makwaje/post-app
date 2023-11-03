import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Input from "../../ui/Input";

function Login() {
  const [userFelid, setUserFelid] = useState("");
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!userFelid) {
      alert("Please enter your username");
      return;
    } else {
      setUser(userFelid);
      navigate("/posts");
    }
  }

  useEffect(
    function () {
      if (user) navigate("/posts");
    },
    [user, navigate],
  );

  return (
    <form onSubmit={handleLogin}>
      <Input
        setUserFelid={setUserFelid}
        value={userFelid}
        label="ُEnter your username"
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
