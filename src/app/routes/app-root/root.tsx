import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const AppRoot = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };
  // TODO: 添加layout 组件
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-svh gap-4">
      <h2 className=" text-2x">首页</h2>
      <div className="flex gap-4">
        <Button variant={"default"} onClick={onLogin}>
          登录
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};
