import { useQueries } from "@tanstack/react-query";
import { TbFidgetSpinner } from "react-icons/tb";
import MovieItem from "./MovieItem";
import { useWatchlist } from "./useWatchlist";

function ListItems() {
  const { data: watchlist = [null], isLoading } = useWatchlist();

  const queryResult = useQueries({
    queries: watchlist.map((q) => {
      return {
        queryKey: ["watchlist", q],
        queryFn: () =>
          fetch(`http://www.omdbapi.com/?apikey=${"c5ee4b6a"}&i=${q}`).then(
            (res) => res.json(),
          ),
      };
    }),
  });

  if (watchlist.length === 0)
    return <TbFidgetSpinner size={50} className="m-auto animate-spin" />;

  if (
    queryResult.at(-1).isLoading === true ||
    queryResult.at(-1).data?.Response === "false" ||
    queryResult.at(-1).isFetched === false
  )
    return <TbFidgetSpinner size={50} className="m-auto animate-spin" />;

  return (
    <>
      {queryResult?.map((q) => {
        if (q.data.Response === "False") {
          return null;
        }
        return (
          <MovieItem
            Poster={q.data?.Poster}
            title={q.data?.Title}
            year={q.data?.Year}
            rating={q.data?.imdbRating}
            genre={q.data?.Genre}
            id={q.data?.imdbID}
            key={q.data?.imdbID || Math.random()}
          />
        );
      })}
    </>
  );
}

export default ListItems;
