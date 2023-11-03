import Loading from "../../ui/Loading";
import PostCard from "./PostCard";
import usePosts from "./usePosts";

function ListPost() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <Loading />;

  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard
            username={post.username}
            img={post.images}
            postText={post.post}
            isAnon={post.anon}
            key={post.username}
          />
        );
      })}
    </>
  );
}

export default ListPost;
