import { Button } from "@/components/ui/button";
import { Form, Input } from "@/components/ui/form";
import { paths } from "@/config/paths";
import { loginInputSchema, useLogin } from "@/lib/auth";
import { Link } from "react-router-dom";

type LoginFormProps = {
  onSuccess: () => void;
};
export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  });
  return (
    <div>
      <Form
        schema={loginInputSchema}
        onSubmit={(values) => {
          login.mutate(values);
        }}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="User Name"
              error={formState.errors["name"]}
              registration={register("name")}
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div>
              <Button type="submit" className="w-full">
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to={paths.auth.register.getHref()}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
