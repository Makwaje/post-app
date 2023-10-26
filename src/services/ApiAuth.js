import supabase from "./supabase";

export async function signUp({ email, password, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getWatchlist() {
  // Get current session
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // Get current user in the session & ID
  const { data: user } = await supabase.auth.getUser();
  const currentUserID = user?.user.id;

  // get the data from the api
  const { data, error } = await supabase
    .from("profile")
    .select("imdbID")
    .eq("id", currentUserID);

  if (error) throw new Error(error.message);

  return data;
}

export async function getUserWatchlist() {
  const watchlist = await getWatchlist();

  const imdbID = watchlist?.at(0)?.imdbID;
  const imdbIDs = imdbID.split(" ");

  return imdbIDs;
}

export async function deleteWatchlist(id) {
  //get user watch list from database
  const userWatchlist = await getUserWatchlist();

  //get userID
  const { data: user } = await supabase.auth.getUser();
  const currentUserID = user?.user.id;

  //filter data from database with the current id
  // convert to string (IMPORTANT)
  const filteredWatchlist = userWatchlist
    .filter((item) => item !== id)
    .join(" ");

  //insert the data to the database
  const { data, error } = await supabase
    .from("profile")
    .update({ imdbID: filteredWatchlist })
    .eq("id", currentUserID)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function addWatchlist(id) {
  //get user watch list from database
  const userWatchlist = await getUserWatchlist();

  //get userID
  const { data: user } = await supabase.auth.getUser();
  const currentUserID = user?.user.id;

  // add id to the watchlist (array)
  userWatchlist.push(id);

  // convert to string (IMPORTANT)
  const newStringWatchlist = userWatchlist.join(" ");

  //insert the data to the database
  const { data, error } = await supabase
    .from("profile")
    .update({ imdbID: newStringWatchlist })
    .eq("id", currentUserID)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function pushObject(id) {
  //get user watch list from database
  const userWatchlist = await getUserWatchlist();

  //get userID
  const { data: user } = await supabase.auth.getUser();
  const currentUserID = user?.user.id;

  // add id to the watchlist (array)
  userWatchlist.push(id);

  //insert the data to the database
  const { data, error } = await supabase
    .from("profile")
    .update({ obj_test: userWatchlist })
    .eq("id", currentUserID)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
