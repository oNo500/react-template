import { apiClient } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const formSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(1, "Required"),
});

export type FormSchema = z.infer<typeof formSchema>;

export const login = async ({ data }: { data: FormSchema }) => {
  return apiClient.post("/login", data);
};

type LoginOptions = {
  mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = ({ mutationConfig }: LoginOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};
  return useMutation({
    onSuccess: (...args) => {
      console.log(args);
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: login,
  });
};
