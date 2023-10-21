import tw from "twin.macro";
import Recommendations from "../features/Home/Recommendations";

const HomePageContainer = tw.div`
min-w-full
mx-auto
`;

const Box = tw.div`

overflow-scroll


max-w-6xl
min-h-full
m-auto

px-4
py-8
md:px-8
md:py-16



bg-neutral-200
shadow-2xl
rounded-2xl




//cheap trick
scale-90
md:scale-100
`;

const Grid = tw.div`
grid

grid-cols-2
sm:grid-cols-3


gap-x-4

gap-y-8

items-center
justify-center
`;

const StyledHeader = tw.h1`
  text-2xl
  font-bold
  mb-8
  
`;

function HomePage() {
  return (
    <HomePageContainer>
      <Box>
        <StyledHeader>Recommendations</StyledHeader>

        <Grid>
          <Recommendations />
        </Grid>
      </Box>
    </HomePageContainer>
  );
}

export default HomePage;
