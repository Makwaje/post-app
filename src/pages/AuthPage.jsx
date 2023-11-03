import Login from "../features/Authentication/Login";

function AuthPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-4 text-5xl font-bold">POST-APP</h1>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
