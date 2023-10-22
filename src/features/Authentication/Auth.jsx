import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Input = tw.input`
px-2
py-1
border
ring-2
outline-none
text-black
text-lg
w-64

bg-neutral-200

rounded-md

md:w-72

`;

const StyledButton1 = tw.button`
text-xl
text-black
font-medium

bg-amber-400
rounded-md
shadow-lg

duration-300
ease-out

px-2
py-1

md:px-4
md:py-2

`;

const StyledButton2 = tw.button`
text-xl
text-black
font-medium

bg-amber-500
rounded-md
shadow-lg

duration-300
ease-out

px-2
py-1

md:px-4
md:py-2

`;

function Auth() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </div>

      <div className="mt-8 flex gap-4 ">
        <StyledButton1
          onClick={() => navigate("/home")}
          className="hover:bg-amber-400 active:scale-95"
        >
          Login
        </StyledButton1>
        <StyledButton2 className="hover:bg-amber-400 active:scale-95">
          Create account
        </StyledButton2>
      </div>
    </>
  );
}

export default Auth;
