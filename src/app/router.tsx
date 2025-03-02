import { createBrowserRouter, RouterProvider } from "react-router";
import { AppRoot } from "./routes/app-root/root";
import { ProtectedRouter } from "./routes/app-root/protected";
import { MainErrorFallback } from "@/components/errors/main";

const convert = ({
  default: Component,
  ...rest
}: {
  default: React.ComponentType;
  [key: string]: any;
}) => {
  return {
    ...rest,
    Component,
  };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <AppRoot />
      </ProtectedRouter>
    ),
    children: [
      // ErrorBoundary
    ],
  },
  {
    path: "/login",
    lazy: () => import("./routes/auth/login").then(convert),
    ErrorBoundary: MainErrorFallback,
  },
  {
    path: "/register",
    lazy: () => import("./routes/auth/register").then(convert),
  },
  {
    path: "*",
    lazy: () => import("./routes/not-found").then(convert),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
