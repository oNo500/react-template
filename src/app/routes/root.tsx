import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '@/components/layouts';
import { Suspense } from 'react';

export const AppRoot = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DashboardLayout>
  );
};

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};
