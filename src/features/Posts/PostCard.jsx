import tw from "twin.macro";
import Images from "./Images";

export const PostCardBox = tw.div`
card rounded-box grid bg-base-300 p-5
h-auto
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
break-all

`;

export const UsernameContainer = tw.div`
flex gap-2
items-center
`;

function PostCard({ username, postText = "", img = [""], isAnon }) {
  return (
    <>
      <PostCardBox>
        <UsernameContainer>
          <div className="avatar placeholder">
            <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
              <span className="text-xs uppercase">
                {isAnon ? "⭐️" : username?.substr(0, 2)}
              </span>
            </div>
          </div>
          <Username>{isAnon ? "Anonymous" : username}</Username>
        </UsernameContainer>
        <div className="divider mt-0 "></div>

        {/* <PostText>{postText}</PostText> */}
        <PostText>
          dsfakjsdhfjkalsdhfjkadshfjkasdhfjklahdskjfhasdjkfhasdljhfaljsdhfjakdhsfjkahdsjflhadsljhfljasdhfajkdshfjkadhsfjkha
        </PostText>

        <div className="divider mt-0"></div>
        {img[0] === "" ? null : <Images imgs={img} />}
      </PostCardBox>
      <div className="divider"></div>
    </>
  );
}

export default PostCard;
