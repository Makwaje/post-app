import tw from "twin.macro";
import UpdateUser from "../features/Account/UpdateUser";

const AccountContainer = tw.div`
min-w-full
mx-auto

`;

const Box = tw.div`
flex
flex-col
gap-4

max-w-6xl
min-h-fit
m-auto

px-4
py-8
md:px-8
md:py-16



bg-neutral-200
shadow-2xl
rounded-2xl

md:items-start
items-center

//cheap trick
scale-90
md:scale-100
`;

const StyledHeading = tw.h1`
text-3xl
font-bold
md:text-6xl
text-black
text-left
border-b-8


divide-amber-500
`;

function Account() {
  return (
    <AccountContainer>
      <Box>
        <StyledHeading>Account Details</StyledHeading>
        <UpdateUser />
      </Box>
    </AccountContainer>
  );
}

export default Account;
