import tw from "twin.macro";
import Images from "./Images";

export const PostCardBox = tw.div`
card rounded-box grid bg-base-300 p-5
h-fit
max-w-2xl


`;

export const Username = tw.p`
text-left
font-bold

badge  badge-lg outline
tracking-wider

`;

export const PostText = tw.p`
text-left

`;

export const UsernameContainer = tw.div`

flex gap-2
items-center
`;

function PostCard({
  username,
  postText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magnam quam ab teneturfuga doloremque doloribus Enim repellat quam Modi possimus minus ab aut eaque sapiente eius ut rerum labore.",
  img = ["luffy.jpg", "luffy.jpg", "luffy.jpg", "luffy.jpg"],
}) {
  const amountOfImages = img?.length;

  return (
    <>
      <PostCardBox>
        <UsernameContainer>
          <div className="avatar placeholder">
            <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
              <span className="text-xs uppercase">
                {username?.substr(0, 2)}
              </span>
            </div>
          </div>
          <Username>{username}</Username>
        </UsernameContainer>
        <div className="divider mt-0 "></div>
        <PostText>{postText}</PostText>
        <div className="divider mt-0"></div>
        {img[0] === "" ? null : <Images imgs={img} />}
      </PostCardBox>
      <div className="divider"></div>
    </>
  );
}

export default PostCard;
