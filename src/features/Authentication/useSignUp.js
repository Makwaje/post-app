import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUp as signUpApi } from "../../services/ApiAuth";

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ email, password, username }) =>
      signUpApi({ email, password, username }),

    onSuccess: (user) => {
      navigate("/login");
      toast.success("Account created successfully, please login");
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isLoading };
}
