import tw from "twin.macro";
import Search from "../features/Search/Search";

const SearchContainer = tw.div`
min-w-full
mx-auto
h-screen
`;

const Box = tw.div`
flex
flex-col
gap-4

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
