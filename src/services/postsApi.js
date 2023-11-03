import { supabase, supabaseUrl } from "./supabase";

export async function getPosts() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) throw new Error("Error fetching posts");

  return posts;
}

export async function CreatePost(postData) {
  // post with no img
  if (postData.img.length === 0) {
    const { data, error } = await supabase.from("posts").insert([
      {
        username: postData.user,
        post: postData.post,
        images: [],
        anon: postData.isAnon,
      },
    ]);
  }

  if (postData.img.length > 0) {
    // upload the image
    const fileName = `post-${postData.user}-${Math.random()}`;
    const { data: storageData, error: storageError } = await supabase.storage
      .from("images")
      .upload(fileName, postData.img[0]);

    if (storageError) throw new Error(storageError.message);

    // insert image url in the table + post
    const { data, error } = await supabase.from("posts").insert([
      {
        username: postData.user,
        post: postData.post,
        images: [
          {
            image: `${supabaseUrl}/storage/v1/object/public/images/${fileName}`,
          },
        ],
        anon: postData.isAnon,
      },
    ]);

    if (error) throw new Error(error.message);
  }
}
