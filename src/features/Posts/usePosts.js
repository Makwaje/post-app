import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/postsApi";

export default function usePosts() {
  const { data: posts, isLoading } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });

  return { posts, isLoading };
}
