import tw from "twin.macro";
import ListPost from "../features/Posts/ListPost";

const PageContainer = tw.div`
my-10
px-2.5
max-w-sm
sm:max-w-xl
min-w-fit
mx-auto

`;

const PostContainer = tw.div`
flex w-full flex-col
`;

function PostsPage() {
  return (
    <PageContainer>
      <PostContainer>
        <ListPost />
      </PostContainer>
    </PageContainer>
  );
}

export default PostsPage;
