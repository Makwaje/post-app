import PostCard from "./PostCard";

function ListPost() {
  return (
    <>
      <PostCard username="makwaje" img={[""]} />
      <PostCard username="makwaje" img={["luffy.jpg"]} />

      <PostCard username="makwaje" postText="Hi mom" img={["luffy.jpg"]} />
      <PostCard
        username="makwaje"
        postText="loren"
        img={["luffy.jpg", "sonic.jpg", "luffy.jpg", "luffy.jpg"]}
      />
    </>
  );
}

export default ListPost;
