import tw from "twin.macro";
import Auth from "../features/Authentication/Auth";

const HomeContainer = tw.div`
min-w-full
mx-auto
h-screen
text-neutral-200
flex
`;

const Box = tw.div`
flex
flex-col
gap-4

max-w-6xl
m-auto
p-16
md:py-24
text-center
justify-center
items-center

bg-blue-900
shadow-2xl
rounded-2xl

//cheap trick
scale-90
md:scale-100
`;

const StyledHeading = tw.h1`
text-5xl
font-bold
md:text-6xl
text-amber-500


[font-family: "Lilita One"]
tracking-wide
`;

const StyledParagraph = tw.p`
text-xl
md:text-2xl

//cheap trick
scale-90
md:scale-100
`;

function AuthPage() {
  return (
    <HomeContainer>
      <Box>
        <StyledHeading>Movies App</StyledHeading>
        <StyledParagraph>Please sign in or create account</StyledParagraph>
        <Auth />
      </Box>
    </HomeContainer>
  );
}

export default AuthPage;
