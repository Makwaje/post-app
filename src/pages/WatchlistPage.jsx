import tw from "twin.macro";
import ListItems from "../features/Watchlist/ListItems";

const SearchContainer = tw.div`
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

function WatchlistPage() {
  return (
    <div>
      <SearchContainer>
        <Box>
          <StyledHeader>Watchlist Movies</StyledHeader>
          <Flex>
            <ListItems />
          </Flex>
        </Box>
      </SearchContainer>
    </div>
  );
}

export default WatchlistPage;
