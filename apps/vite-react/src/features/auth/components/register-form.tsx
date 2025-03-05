import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema, FormSchema, useRegister } from "../api/auth-login";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { useAuthStore, User } from "@/store/auth";

type RegisterFormProps = {
  onSuccess: () => void;
};

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const state = useAuthStore();
  const registerMution = useRegister({
    mutationConfig: {
      onSuccess: (res) => {
        const { data } = res;
        const { accessToken } = data;
        state.setAuth({
          user: data.user as User,
          token: accessToken,
        });
        onSuccess();
      },
    },
  });
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    registerMution.mutate({ data: values });
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">注册</CardTitle>
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
                      <Input placeholder="shadcn@mail.com" {...field} />
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
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={registerMution.isPending}
                type="submit"
                className="w-full"
              >
                {registerMution.isPending ? "注册中..." : "注册"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-sm">
          已有账号？{" "}
          <Link className=" underline underline-offset-4" to={"/login"}>
            点击登录
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export { RegisterForm };
