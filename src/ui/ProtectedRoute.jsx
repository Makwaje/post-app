import { useEffect } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { useUser } from "../features/Authentication/useUser";

const FullPage = tw.div`
h-screen
flex
items-center 
justify-center
`;

const Box = tw.div`

max-w-6xl
min-h-fit
m-auto

p-12




bg-neutral-200
shadow-2xl
rounded-2xl

md:items-start
items-center

//cheap trick
scale-90
md:scale-100
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <FullPage>
        <Box>
          <TbFidgetSpinner size={120} className="mx-auto animate-spin" />
        </Box>
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
