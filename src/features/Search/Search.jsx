import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import tw from "twin.macro";
import ListItem from "./ListItem";

const SearchBarContainer = tw.div`
w-full
relative


`;

const Input = tw.input`

min-w-[90%]
p-4
rounded-2xl
drop-shadow-xl

outline-none


text-xl
mb-8
`;

const SearchButton = tw.button`
  bg-amber-500
  py-3
  px-3
  text-lg
  md:text-2xl

  font-medium

  rounded-3xl
  drop-shadow-lg
  
  absolute
  top-1
  right-5
  md:right-14
  lg:right-16
  sm:right-8

`;

const Grid = tw.div`
grid
grid-cols-1
`;

const Flex = tw.div`
flex
flex-col
items-center
justify-center
drop-shadow-xl
`;

function Search() {
  const [query, setQuery] = useState("");

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["search-movie"],
    queryFn: () => {
      const data = fetch(
        `http://www.omdbapi.com/?apikey=${`c5ee4b6a`}&s=${query}`,
      ).then((res) => res.json());
      return data;
    },
    enabled: false, // disable this query from automatically running
  });

  function handleClick() {
    refetch();
  }

  return (
    <>
      <SearchBarContainer>
        <Flex>
          <Input
            placeholder="search for movie"
            type="search"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isFetching}
            className="focus:ring-4 focus:ring-amber-500"
          />
          <SearchButton onClick={handleClick} disabled={isFetching}>
            {isFetching ? "Loading..." : "Search"}
          </SearchButton>
        </Flex>
        <Grid>
          {isFetching ? (
            <TbFidgetSpinner size={50} className="m-auto animate-spin" />
          ) : (
            data?.Search?.map((movie) => (
              <ListItem
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                id={movie.imdbID}
                key={movie.imdbID}
              />
            ))
          )}
        </Grid>
      </SearchBarContainer>
    </>
  );
}

export default Search;
