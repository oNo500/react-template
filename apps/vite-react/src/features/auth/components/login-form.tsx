import { useForm } from "react-hook-form";
import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formSchema, FormSchema, useLogin } from "../api/auth-login";
import { Link } from "react-router";
import { useAuthStore } from "@/store/auth";

type LoginFormProps = {
  onSuccess: () => void;
};
const LoginForm = ({ onSuccess, ...props }: LoginFormProps) => {
  const state = useAuthStore();
  const loginMutation = useLogin({
    mutationConfig: {
      onSuccess: (res) => {
        const { data } = res;
        // TODO: 抽离到全局状态
        state.setAuth({
          user: data.user,
          token: data.accessToken,
        });
        onSuccess();
      },
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    loginMutation.mutate({ data: values });
  };
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className={cn("flex flex-col gap-6")} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">登录</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loginMutation.isPending}
                type="submit"
                className="w-full"
              >
                {loginMutation.isPending ? "登录中..." : "登录"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-sm">
          没有账号？{" "}
          <Link className="underline underline-offset-4" to={"/register"}>
            点击注册
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export { LoginForm };
