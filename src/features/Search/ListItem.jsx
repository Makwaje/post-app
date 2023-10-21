import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Card = tw.div`
bg-white

h-32
lg:w-80

rounded-xl
p-2.5

ring-4
ring-amber-500
drop-shadow-lg

my-2
`;

const Image = tw.img`
  h-28
  mb-2
  rounded-md
  col-span-1
`;

const MovieName = tw.h2`
  font-bold
  text-xl
`;

const Grid = tw.div`
  grid 
  grid-cols-3
`;

function ListItem({ poster, title, year, id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/movie/${id}`);
  }
  return (
    <Card
      className="transition-all hover:bg-amber-50 active:scale-95"
      onClick={handleClick}
    >
      <Grid>
        <Image src={poster} alt="Movie poster" />
        <div className="col-span-2 flex flex-col justify-center">
          <MovieName>
            {title} ({year})
          </MovieName>
        </div>
      </Grid>
    </Card>
  );
}

export default ListItem;
