import RegisterForm from '@/features/components/register-form';

const RegisterPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
