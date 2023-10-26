import tw from "twin.macro";
import ListItems from "../features/Watchlist/ListItems";

const WatchlistContainer = tw.div`
min-w-full
mx-auto
h-screen

mt-[-36px]
md:mt-0

`;

const Box = tw.div`

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

const Flex = tw.div`
flex
flex-col
gap-4`;

const StyledHeader = tw.h1`
  text-2xl
  font-bold
  mb-8
  
`;

const Grid = tw.div`
grid

grid-cols-1
sm:grid-cols-2
lg:grid-cols-3




gap-y-8
gap-x-6


items-center
justify-center
self-center

`;
function WatchlistPage() {
  return (
    <div>
      <WatchlistContainer>
        <Box>
          <StyledHeader>Watchlist Movies</StyledHeader>
          <Flex>
            <Grid>
              <ListItems />
            </Grid>
          </Flex>
        </Box>
      </WatchlistContainer>
    </div>
  );
}

export default WatchlistPage;
