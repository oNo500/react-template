import { Head } from "@/components/seo";
import { paths } from "@/config/paths";
import { useUser } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();
  const handleStart = () => {
    if (user) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <>
      <Head description="Landing Page" />
      <button onClick={handleStart}>Start</button>
    </>
  );
};
