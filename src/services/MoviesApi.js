const key = "c5ee4b6a";

export async function searchMovies(query) {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);

    if (!res.ok) throw new Error("Something went wrong with fetching movies");

    const data = await res.json();

    if (data.Response === "False") throw new Error("Movie not found!");

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getMovie(id) {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`);

    if (!res.ok) throw new Error("Something went wrong with fetching movies");

    const data = await res.json();

    if (data.Response === "False") throw new Error("Movie not found!");

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
