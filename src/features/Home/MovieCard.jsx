import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Card = tw.div`
bg-white

w-[10.8rem]
sm:w-56

h-[26rem]
sm:h-[29rem]

sm:scale-90
md:scale-100

rounded-xl
p-2.5

ring-4
ring-amber-500
drop-shadow-lg

`;

const Image = tw.img`
w-fit
sm:scale-95
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
        className="justify-self-center transition-all hover:bg-amber-50 active:scale-95"
      >
        <div className="sm:h-[27] sm:w-52">
          <Image src={Poster} alt={`${title} poster`} />
          <div className="flex flex-col gap-1 divide-y-2 divide-amber-500">
            <MovieName>
              {title} ({year})
            </MovieName>
            <Rating>imdbRating: {rating}/10</Rating>
            <Genre>{genre}</Genre>
          </div>
        </div>
      </Card>
    </>
  );
}

export default MovieCard;
