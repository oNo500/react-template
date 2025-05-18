import { Button } from '@repo/ui/components/button';
import { Card } from '@repo/ui/components/card';

import LoginForm from '@/features/components/login-form';

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card>
        <h1 className="text-2xl font-bold">Login</h1>
        <Button>这是一个按钮</Button>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
