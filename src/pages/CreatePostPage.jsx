import tw from "twin.macro";
import CreateForm from "../features/Create-posts/CreateForm";

const PageContainer = tw.div`
my-10
px-2.5
max-w-sm
sm:max-w-xl
min-w-fit
mx-auto
md:scale-125

`;

const TextHeader = tw.h1`
text-3xl
text-center
font-bold
mb-4



md:mt-36
`;

const FlexContainer = tw.div`
flex w-full flex-col
`;

const CreatePostCard = tw.div`
card rounded-box grid bg-base-300 p-6
h-fit
max-w-2xl



`;

function CreatePostPage() {
  return (
    <PageContainer>
      <TextHeader>Create post</TextHeader>
      <FlexContainer>
        <CreatePostCard>
          <CreateForm />
        </CreatePostCard>
      </FlexContainer>
    </PageContainer>
  );
}

export default CreatePostPage;
