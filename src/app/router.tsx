import { paths } from "@/config/paths";
import { ProtectedRoute } from "@/lib/auth";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoot } from "./routes/root";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  console.log("clientLoader", clientLoader, clientAction);
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const CreateAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: () => import("./routes/landing").then(convert(queryClient)),
    },
    {
      path: paths.auth.login.getHref(),
      lazy: () => import("./routes/auth/login").then(convert(queryClient)),
    },
    {
      path: paths.auth.register.getHref(),
      lazy: () => import("./routes/auth/register").then(convert(queryClient)),
    },
    {
      path: paths.app.root.getHref(),
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      children: [
        {
          path: paths.app.profile.getHref(),
          lazy: () => import("./routes/profile").then(convert(queryClient)),
        },
      ],
    },

    {
      path: "*",
      lazy: () => import("./routes/not-found").then(convert(queryClient)),
      // ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => CreateAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
