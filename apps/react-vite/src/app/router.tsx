import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { GlobalError } from '@/components/errors/global-error';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: GlobalError,
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/home')).default,
    }),
  },
  {
    path: '/login',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/login')).default,
    }),
  },
  {
    path: '/register',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/register')).default,
    }),
  },
  {
    path: '*',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/not-found')).default,
    }),
  },
]);
const LoadingFallback = () => <div>加载中...</div>;

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
