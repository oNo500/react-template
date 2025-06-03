import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { GlobalError } from '@/components/errors/global-error';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: GlobalError, // TODO 怎么做，不会了
    lazy: async () => ({
      Component: (await import('@/app/routes/home')).default,
    }),
  },
  {
    path: '/login',
    lazy: async () => ({
      Component: (await import('@/app/routes/login')).default,
    }),
  },
  {
    path: '/register',
    lazy: async () => ({
      Component: (await import('@/app/routes/register')).default,
    }),
  },
  {
    path: '*',
    lazy: async () => ({
      Component: (await import('@/app/routes/not-found')).default,
    }),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
