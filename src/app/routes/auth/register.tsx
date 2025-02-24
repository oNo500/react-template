import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileForm } from "@/features/auth/components/register-form";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className=" w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>注册</CardTitle>
            <CardDescription>使用邮箱注册</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
          <CardFooter>
            <Link to={"/login"}>已有账号？点击登录</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
