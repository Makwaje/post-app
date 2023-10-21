import tw from "twin.macro";

const StyledParagraph = tw.p`
text-xl
md:text-2xl
font-bold

//cheap trick
scale-90
md:scale-100
text-center
`;

const Input = tw.input`
px-2
py-1
border
ring-2
outline-none
text-black
text-lg
w-72

bg-neutral-100

rounded-md

md:w-80

`;

const StyledButton1 = tw.button`
text-2xl
text-black
font-medium

bg-amber-400
rounded-md
shadow-lg

duration-300
ease-out
w-fit

px-4
py-1

md:px-4
md:py-2

`;

function UpdateUser() {
  return (
    <>
      <div className="mb-4 mt-8 flex flex-col gap-4">
        <StyledParagraph>Update user password</StyledParagraph>
        <Input type="password" placeholder="Enter your new password" />
        <Input type="password" placeholder="Re-Enter the new password" />

        <StyledParagraph>Update user profile</StyledParagraph>
        <Input type="file" />
      </div>

      <StyledButton1 className="hover:bg-amber-400 active:scale-95">
        Update
      </StyledButton1>
    </>
  );
}

export default UpdateUser;
