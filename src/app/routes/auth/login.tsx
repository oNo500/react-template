import { AuthLayout } from "@/components/layouts";
import { LoginForm } from "@/features/auth/login-form";

const LoginRoute = () => {
  return (
    <AuthLayout title="Log in">
      <LoginForm
        onSuccess={() => {
          console.log("success");
        }}
      />
    </AuthLayout>
  );
};

export default LoginRoute;
