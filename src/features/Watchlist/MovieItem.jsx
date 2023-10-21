import tw from "twin.macro";
import Poster from "../../assets/poster.jpg";

const Card = tw.div`
bg-white

h-36
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

const WatchedButton = tw.button`
bg-amber-500

font-medium
text-sm

px-2.5
py-0.5
rounded-md
`;

const DeleteButton = tw.button`
bg-red-500
text-neutral-50
font-medium
text-sm

px-2.5
py-0.5
rounded-md

`;

function MovieItem() {
  return (
    <Card className="">
      <Grid>
        <Image src={Poster} alt="Movie poster" />
        <div className="col-span-2 flex flex-col gap-2 divide-y divide-amber-500">
          <MovieName>Freedom (2014)</MovieName>
          <Rating>imdbRating: 5.7/10</Rating>
          <Genre>Drama, Music</Genre>

          <div className="flex items-center justify-end gap-2 p-1">
            <WatchedButton className="transition-all active:scale-95">
              Watched
            </WatchedButton>
            <DeleteButton className="transition-all active:scale-95">
              Delete
            </DeleteButton>
          </div>
        </div>
      </Grid>
    </Card>
  );
}

export default MovieItem;
