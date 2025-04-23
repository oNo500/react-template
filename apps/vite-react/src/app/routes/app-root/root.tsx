import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import logoUrl from "@/assets/icons/react.svg";
import { useAuthStore } from "@/store/auth";
import { Head } from "@/components/seo/head";

export const AppRoot = () => {
  const navigate = useNavigate();
  const state = useAuthStore();
  const onLogin = () => {
    navigate("/login");
  };
  // TODO: 添加layout 组件
  return (
    <div className="container">
      <Head title="首页" />
      <nav className="flex items-center justify-between py-2 px-4">
        <div>
          <a href="/" className="flex items-center gap-4">
            <h1 className="text-base">React App</h1>
            <img src={logoUrl} alt="logo" className="h-6 w-6" />
          </a>
        </div>
        <div className="flex gap-4">
          {state.isLogin ? (
            <div>{state.user?.name}</div>
          ) : (
            <Button variant={"default"} onClick={onLogin}>
              登录
            </Button>
          )}
          <ModeToggle />
        </div>
      </nav>
      <div className="flex items-center justify-center h-96">
        <h1 className="text-4xl">Hello World</h1>
      </div>
    </div>
  );
};
