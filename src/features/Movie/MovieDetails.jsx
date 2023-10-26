import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { HiEye, HiMiniCheckCircle } from "react-icons/hi2";
import { TbFidgetSpinner } from "react-icons/tb";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import { addWatchlist, deleteWatchlist } from "../../services/ApiAuth";
import { getMovie } from "../../services/MoviesApi";
import { useWatchlist } from "../Watchlist/useWatchlist";

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

const Flex = tw.div`
flex
flex-col
gap-2
items-center
`;

const StyledParagraph = tw.span`
text-lg
md:text-2xl
font-bold
inline-block

//cheap trick
scale-90
md:scale-100
`;

const Image = tw.img`
  h-80
  md:h-fit
`;

const MovieName = tw.h1`
text-center
  font-bold
  text-2xl
  tracking-wide
  md:text-4xl
`;

const Genre = tw.p`
text-sm
text-neutral-500

`;

const Rating = tw.p`
  text-sm
  text-neutral-600
  font-medium

`;

const StyledInformation = tw.p`
text-xl


text-neutral-800
`;

const HeadingStyle = tw.h1`

  text-2xl
  tracking-wide
  font-medium
  mb-2
`;

function MovieDetails() {
  const { id } = useParams("id");
  const queryClient = useQueryClient();
  const { data: watchlist = [] } = useWatchlist();

  const { data = {}, isLoading } = useQuery({
    queryFn: () => getMovie(id),
    queryKey: ["movie-details", id],
  });

  const { mutate: addMovie, isLoading: isAdding } = useMutation({
    mutationFn: addWatchlist,
    mutationKey: ["watchlist"],

    onSuccess: () => {
      toast.success("Movie added successfully");
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });

  const { mutate: deleteWatchlistMu, isLoading: isDeleting } = useMutation({
    mutationFn: deleteWatchlist,
    mutationKey: ["watchlist"],

    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Movie removed successfully");
    },
  });
  const isAddedToWatchlist = watchlist.includes(id);

  function handleClick(id) {
    if (isAddedToWatchlist === true) {
      deleteWatchlistMu(id);
      return;
    }
    addMovie(id);
  }

  return (
    <>
      {isLoading && (
        <TbFidgetSpinner size={50} className="m-auto animate-spin" />
      )}
      <Box>
        <Flex>
          <Image src={data.Poster} />
          <MovieName>
            {data.Title} ({data.Year})
          </MovieName>
          <Rating>
            <StyledParagraph>imdbRating:</StyledParagraph> ({data.imdbRating}
            /10)
          </Rating>
          <Genre>
            <StyledParagraph>Genre:</StyledParagraph> {data.Genre}
          </Genre>
          <Genre className="font-medium">
            <StyledParagraph>Director:</StyledParagraph> {data.Director}
          </Genre>
        </Flex>
      </Box>

      <Box className="divide-x-4 divide-amber-500">
        <HeadingStyle>Description</HeadingStyle>
        <StyledInformation className="p-2 pl-4">{data.Plot}</StyledInformation>
      </Box>

      <Box>
        <Flex>
          <button
            onClick={() => handleClick(id)}
            disabled={isLoading}
            className={`rounded-md bg-amber-500 p-2 duration-200 ${
              isAddedToWatchlist ? "hover:bg-red-600 hover:text-red-100" : ""
            }`}
          >
            <Flex>
              {isAdding || isDeleting ? (
                <TbFidgetSpinner size={50} className="m-auto animate-spin" />
              ) : isAddedToWatchlist ? (
                <HiMiniCheckCircle
                  size={48}
                  className={`${isAddedToWatchlist ? "text-green-700" : ""}`}
                />
              ) : (
                <HiEye size={48} />
              )}
              <HeadingStyle>
                {isAddedToWatchlist
                  ? "Remove from watchlist"
                  : "Add to watchlist"}
              </HeadingStyle>
            </Flex>
          </button>
        </Flex>
      </Box>
    </>
  );
}

export default MovieDetails;
