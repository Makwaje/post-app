import { Link } from "react-router-dom";
import tw from "twin.macro";
import MovieDetails from "../features/Movie/MovieDetails";

const MoviePageContainer = tw.div`
min-w-full
mx-auto
`;

const Box = tw.div`

max-w-6xl
min-h-fit
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
md:mb-4
`;

function MoviePage() {
  return (
    <MoviePageContainer>
      <Box>
        <Link
          className="text-xl font-medium text-blue-900 underline duration-150 ease-in hover:text-blue-700"
          to={-1}
        >
          &larr; Return
        </Link>
        <MovieDetails />
      </Box>
    </MoviePageContainer>
  );
}

export default MoviePage;
