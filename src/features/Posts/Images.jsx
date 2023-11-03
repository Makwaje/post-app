function Images({ imgs }) {
  const imgArr = [];

  imgs.map?.((img) => imgArr.push(img));
  console.log(imgArr);

  return (
    <>
      <div className="carousel max-w-md justify-self-center rounded-xl">
        {imgArr.map((img) => {
          if (!img.image) return null;
          return (
            <img
              key={img + Math.random()}
              src={img?.image}
              alt="m"
              className="w-full"
            />
          );
        })}
      </div>
      {imgArr?.length > 1 && (
        <p className="mx-auto mt-4 w-fit rounded-full p-2 outline ">
          &larr; Swipe for more &rarr;
        </p>
      )}
    </>
  );
}

export default Images;
