import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Card = tw.div`
bg-white

w-fit
h-[25rem]


lg:w-80

rounded-xl
p-2.5

ring-4
ring-amber-500
drop-shadow-lg

// overflow-hidden
overflow-hidden

`;

const Image = tw.img`
  mb-2
  rounded-lg
`;

const MovieName = tw.h2`
  font-bold

`;

const Genre = tw.p`
text-sm
text-neutral-500
pt-1
`;

const Rating = tw.p`
  text-sm
  text-neutral-500
  font-medium
  pt-1
`;

function MovieCard({ Poster, title, year, rating, genre, id }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => navigate(`/movie/${id}`)}
        className="transition-all hover:bg-amber-50 active:scale-95"
      >
        <Image src={Poster} alt={`${title} poster`} />
        <div className="flex flex-col gap-1 divide-y-2 divide-amber-500">
          <MovieName>
            {title} ({year})
          </MovieName>
          <Rating>imdbRating: {rating}/10</Rating>
          <Genre>{genre}</Genre>
        </div>
      </Card>
    </>
  );
}

export default MovieCard;
