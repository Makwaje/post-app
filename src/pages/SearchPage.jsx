import tw from "twin.macro";
import Search from "../features/Search/Search";

const SearchContainer = tw.div`
min-w-full
mx-auto
h-screen

mt-[-40px]
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

items-center

//cheap trick
scale-90
md:scale-100
`;

const Grid = tw.div`
grid

grid-cols-2
sm:grid-cols-3
lg:grid-cols-4



gap-x-4
sm:gap-x-8

gap-y-8


items-center
justify-center
self-center

`;

function SearchPage() {
  return (
    <SearchContainer>
      <Box>
        <Search />
      </Box>
    </SearchContainer>
  );
}

export default SearchPage;
