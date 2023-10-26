import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import tw from "twin.macro";
import { deleteWatchlist as deleteWatchlistApi } from "../../services/ApiAuth";

const Card = tw.div`
bg-white

h-56
lg:w-80



rounded-xl
p-2.5

ring-4
ring-amber-500
drop-shadow-lg

my-1
`;

const Image = tw.img`
  h-28
  mb-2
  rounded-md
`;

const MovieName = tw.h2`
  font-bold
`;

const Genre = tw.p`
text-sm
text-neutral-500
pt-1.5
`;

const Rating = tw.p`
  text-sm
  text-neutral-500
  font-medium
  pt-1.5
`;

const Grid = tw.div`
  grid 
  grid-cols-3
`;

const DeleteButton = tw.button`
bg-red-500
text-neutral-50
font-medium
text-sm
px-6
py-2.5
rounded-md

mt-2

`;

function MovieItem({ Poster, title, year, rating, genre, id }) {
  const queryClient = useQueryClient();

  const { mutate: deleteWatchlistMu, isLoading } = useMutation({
    mutationFn: deleteWatchlistApi,
    mutationKey: ["watchlist"],

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
      toast.success("Movie deleted successfully");
    },
  });

  function handleClick(id) {
    deleteWatchlistMu(id);
  }

  return (
    <Card className="">
      <Grid>
        <Image src={Poster} alt="Movie poster" />
        <div className="col-span-2 flex flex-col gap-2 divide-y divide-amber-500">
          <MovieName>
            {title} ({year})
          </MovieName>
          <Rating>imdbRating: {rating}/10</Rating>
          <Genre>{genre}</Genre>
        </div>
      </Grid>
      <div className="flex flex-col items-end justify-end">
        <DeleteButton
          onClick={() => handleClick(id)}
          className="transition-all hover:bg-red-600 active:scale-95"
        >
          Delete
        </DeleteButton>
      </div>
    </Card>
  );
}

export default MovieItem;
