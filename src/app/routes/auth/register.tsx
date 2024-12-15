import { AuthLayout } from "@/components/layouts";
import { paths } from "@/config/paths";
import { RegisterForm } from "@/features/auth/register-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const RegisterRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  return (
    <AuthLayout title="Register">
      <RegisterForm
        onSuccess={() => {
          navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
            replace: true,
          });
        }}
      />
    </AuthLayout>
  );
};
export default RegisterRoute;
