import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export const AppRoot = () => {
  return (
    <div className="text-center">
      <h2 className=" text-2xl text-amber-950">我在首页的你</h2>
      <Button className="">走～ 去登录</Button>
      <h2>看看主题</h2>
      <div className="bg-background text-foreground">
        <p className=" bg-primary text-primary-foreground">12323213</p>
        <ModeToggle />
      </div>
    </div>
  );
};
