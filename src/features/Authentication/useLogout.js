import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/ApiAuth";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["user"],

    onSettled: () => {
      toast.success("You've been logged out successfully");
      toast("comeback later! :)");

      navigate("/login");
    },
  });

  return { logout, isLoading };
}
