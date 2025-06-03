import { useMutation, useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

const useUser = () => {
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: async () => apiClient.get('/api/user/me'),
    select: (res) => res.data,
  });
  return { userData };
};

export { useUser };
