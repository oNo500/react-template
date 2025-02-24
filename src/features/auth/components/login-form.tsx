import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "../api/auth-login";
import { Link } from "react-router";

type LoginFormProps = {
  onSuccess: () => void;
};

export function LoginForm({
  className,
  onSuccess,
  ...props
}: React.ComponentProps<"div"> & LoginFormProps) {
  const loginMutation = useLogin({
    mutationConfig: {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        onSuccess();
      },
    },
  });
  const onSubmit = async (form: React.FormEvent) => {
    form.preventDefault();
    const formEl = form.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const { email, password }: any = Object.fromEntries(formData);
    loginMutation.mutate({ data: { email, password } });
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">登录</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  defaultValue={"m@example.com"}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">密码</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  defaultValue={"m@example.com"}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  disabled={loginMutation.isPending}
                  type="submit"
                  className="w-full"
                >
                  {loginMutation.isPending ? "Loading..." : "登录"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-sm">
              还没有账号？{" "}
              <Link to={"/register"} className="underline underline-offset-4">
                点击注册
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
