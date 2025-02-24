import { RegisterForm } from "@/features/auth/components/register-form";

const Register = () => {
  return (
    <div className=" flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className=" w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
