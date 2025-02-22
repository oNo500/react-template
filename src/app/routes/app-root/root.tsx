import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ButtonDemo } from "@/components/ui/button-test";
import { useNavigate } from "react-router";

export const AppRoot = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };
  return (
    <div className="text-center">
      <h2 className=" text-2xl text-amber-950">我在首页的你</h2>
      <Button variant={"default"} onClick={onLogin}>
        走～ 去登录
      </Button>
      <h2>看看主题</h2>
      <div className="bg-background text-foreground">
        <p className=" bg-primary text-primary-foreground">12323213</p>
        <ModeToggle />
      </div>
      <div>
        <h2>查看自定义按钮</h2>
        <ButtonDemo size="sm" asChild className="text-2xl">
          <div>我是自定义按钮</div>
        </ButtonDemo>
      </div>
    </div>
  );
};
