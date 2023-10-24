import {
  HiMagnifyingGlass,
  HiMiniHome,
  HiOutlineTag,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import tw from "twin.macro";
import LogoutButton from "../features/Authentication/logoutButton";

const NavContainer = tw.nav`
bg-neutral-200
h-20
py-2
mx-auto
mb-8

max-w-5xl
rounded-lg

md:px-4
`;

const StyledList = tw.ul`
flex
justify-between
items-center
`;

const ListItem = tw.li`
  flex
  items-center
  justify-center
  w-20
`;

const StyledNavItem = tw.div`
flex
flex-col
items-center
justify-center
p-1
`;

function NavBar() {
  return (
    <NavContainer>
      <StyledList>
        <ListItem>
          <NavLink to="/Account">
            <StyledNavItem>
              <span>
                <HiOutlineUserCircle size={26} />
              </span>
              <span>Account</span>
            </StyledNavItem>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/Watchlist">
            <StyledNavItem>
              <span>
                <HiOutlineTag size={26} />
              </span>
              <span>Watchlist</span>
            </StyledNavItem>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/home">
            <StyledNavItem>
              <span>
                <HiMiniHome size={26} />
              </span>
              <span>Home</span>
            </StyledNavItem>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/Search">
            <StyledNavItem>
              <span>
                <HiMagnifyingGlass size={26} />
              </span>
              <span>Search</span>
            </StyledNavItem>
          </NavLink>
        </ListItem>

        <ListItem>
          <LogoutButton />
        </ListItem>
      </StyledList>
    </NavContainer>
  );
}

export default NavBar;
