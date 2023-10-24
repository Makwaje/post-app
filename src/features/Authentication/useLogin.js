import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/ApiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      const userData = data.user;
      const username = userData.user_metadata.username;
      toast.success(`Welcome back, ${username}`);

      queryClient.setQueryData(["user"], data.user);
      navigate("/home");
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, isLoading };
}
