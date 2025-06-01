import { type DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    // 数据被认为是新鲜的时间
    staleTime: 1000 * 60 * 5, // 5 minutes
    // 缓存时间
    gcTime: 1000 * 60 * 10, // 10 minutes
    // 重试配置
    retry: false,
    // 重新获取配置
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: false,
  },
};
const ssrQueryConfig: DefaultOptions = {
  queries: {
    staleTime: 0,
    gcTime: 0,
    retry: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: typeof window === 'undefined' ? ssrQueryConfig : queryConfig,
});
