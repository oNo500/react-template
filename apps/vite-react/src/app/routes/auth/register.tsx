import { RegisterForm } from "@/features/auth/components/register-form";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate= useNavigate();
  const handleSuccess = ()=>{
    navigate('/login')
  }
  return (
    <div className=" flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className=" w-full max-w-sm">
        <RegisterForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default Register;
