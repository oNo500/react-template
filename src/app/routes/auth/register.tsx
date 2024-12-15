import { AuthLayout } from "@/components/layouts";
import { RegisterForm } from "@/features/auth/register-form";

const RegisterRoute = () => {
  return (
    <AuthLayout title="Register">
      <RegisterForm onSuccess={() => {}} />
    </AuthLayout>
  );
};
export default RegisterRoute;
