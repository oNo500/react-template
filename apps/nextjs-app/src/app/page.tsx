import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import Navbar from '@/components/navbar';
import Hero from '@/features/home/components/hero';
import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/query-client';
import type { APIResponse, User } from '@/types/api';

export default async function Home() {
  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: () =>
      apiClient.get<APIResponse<User>>('/api/auth/me', {
        cache: 'no-cache',
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 pb-20 sm:p-20">
        <Navbar />
        <main className="flex h-full w-full flex-1 flex-col">
          <Hero />
        </main>
      </div>
    </HydrationBoundary>
  );
}
