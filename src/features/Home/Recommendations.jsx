import { useQueries } from "@tanstack/react-query";
import { TbFidgetSpinner } from "react-icons/tb";
import MovieCard from "./MovieCard";

function Recommendations() {
  const id = [
    "tt0388629",
    "tt0816692",
    "tt0068646",
    "tt0241527",
    "tt15398776",
    "tt9362722",
    "tt9603212",
    "tt10366206",
    "tt5537002",
    "tt15239678",
    "tt13238346",
    "tt17009710",
    "tt22687790",
    "tt1462764",
  ];

  const queryResult = useQueries({
    queries: id.map((q) => {
      return {
        queryKey: ["movies", q],
        queryFn: () =>
          fetch(`http://www.omdbapi.com/?apikey=${"c5ee4b6a"}&i=${q}`).then(
            (res) => res.json(),
          ),
      };
    }),
  });

  if (
    queryResult.at(-1).isLoading === true ||
    queryResult.at(-1).isFetched === false
  )
    return <TbFidgetSpinner size={50} className="m-auto animate-spin" />;

  return (
    <>
      {queryResult?.map((q) => (
        <MovieCard
          Poster={q.data?.Poster}
          title={q.data?.Title}
          year={q.data?.Year}
          rating={q.data?.imdbRating}
          genre={q.data?.Genre}
          id={q.data?.imdbID}
          key={q.data?.imdbID}
        />
      ))}
    </>
  );
}

export default Recommendations;
