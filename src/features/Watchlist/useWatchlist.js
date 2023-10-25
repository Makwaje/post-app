import { useQuery } from "@tanstack/react-query";
import { getUserWatchlist } from "../../services/ApiAuth";

export function useWatchlist() {
  const { data, isLoading } = useQuery({
    queryFn: getUserWatchlist,
    queryKey: ["watchlist"],
  });

  return { data, isLoading };
}
