import { Head } from '@/components/seo';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import logoURL from '@/assets/logo.svg';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingRoute = () => {
  const navigate = useNavigate();
  const response = useUser();
  const handleStart = () => {
    if (response.data) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <>
      <Head description="Landing Page" title="Landing" />
      <main className="h-screen">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-xl font-semibold">React Tailwind Starter</p>
          <img className="mx-auto mt-6 w-64" src={logoURL} alt="logo" />
          <p className="mt-4 text-sm text-muted-foreground">A starter kit for your next React + Tailwind project.</p>
          <Button className="mt-6 " onClick={handleStart}>
            <span className="flex h-full items-center">
              <Home />
              <span className="ml-2">Get Started</span>
            </span>
          </Button>
        </div>
      </main>
    </>
  );
};
export default LandingRoute;
