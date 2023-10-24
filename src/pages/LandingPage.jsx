import { Link } from "react-router-dom";
import tw from "twin.macro";

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
md:p-24
text-center
justify-center
items-center

bg-blue-900
shadow-2xl
max-h-96
rounded-2xl

//cheap trick
scale-90
md:scale-100
`;

const StyledHeading = tw.h1`
text-4xl
md:text-6xl
text-amber-500 

[font-family: "Lilita One"]
tracking-wide

`;

const StyledParagraph = tw.p`
text-xl
md:text-2xl


mb-8
md:mb-4

//cheap trick
scale-90
md:scale-100

`;

const StyledButton = tw.button`
text-xl
font-medium
text-black

bg-amber-500
rounded-md
border-4
border-amber-400
shadow-lg

duration-300
ease-out

px-2
py-1

md:mt-16
md:px-4
md:py-2
`;

function LandingPage() {
  return (
    <HomeContainer>
      <Box>
        <StyledHeading>Movies App</StyledHeading>
        <StyledParagraph>Make sure you don't miss any show!</StyledParagraph>
        <Link to={"/home"}>
          <StyledButton className="hover hover:bg-amber-400 active:scale-95">
            Get Started
          </StyledButton>
        </Link>
      </Box>
    </HomeContainer>
  );
}

export default LandingPage;
