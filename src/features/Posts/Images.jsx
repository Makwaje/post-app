function Images({ imgs }) {
  return (
    <>
      <div className="carousel max-w-md justify-self-center rounded-xl">
        {imgs?.map?.((img) => {
          return (
            <img
              key={img + Math.random()}
              src={img}
              alt="m"
              className="w-full"
            />
          );
        })}
      </div>
      {imgs?.length > 1 && (
        <p className="mx-auto mt-4 w-fit rounded-full p-2 outline ">
          Swipe for more &rarr;
        </p>
      )}
    </>
  );
}

export default Images;
