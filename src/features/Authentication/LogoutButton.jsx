import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import tw from "twin.macro";
import { useLogout } from "./useLogout";

const StyledNavItem = tw.div`
flex
flex-col
items-center
justify-center
p-1
`;

function LogoutButton() {
  const { logout } = useLogout();

  return (
    <StyledNavItem
      className="active:scale-90"
      onClick={() => {
        logout();
      }}
    >
      <span>
        <HiOutlineArrowRightOnRectangle size={26} />
      </span>
      <span>Logout</span>
    </StyledNavItem>
  );
}

export default LogoutButton;
