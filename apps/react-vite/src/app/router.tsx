import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
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
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
