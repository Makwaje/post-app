import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreatePost } from "../../services/postsApi";

export function useCreatePost() {
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: CreatePost,
    mutationKey: ["posts"],

    onSuccess: () => toast.success("Post added successfully"),
  });

  return { createPost, isLoading };
}
