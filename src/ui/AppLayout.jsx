import { Outlet } from "react-router-dom";
import tw from "twin.macro";
import NavBar from "./NavBar";

const AppLayoutContainer = tw.div`
overflow-scroll
h-fit
`;

function AppLayout() {
  return (
    <>
      <NavBar />

      <AppLayoutContainer>
        <Outlet />
      </AppLayoutContainer>
    </>
  );
}

export default AppLayout;
