import { RouterProvider, createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello world</div>,
  },
]);

export const AppProvider = () => {
  return <RouterProvider router={router} />;
};
