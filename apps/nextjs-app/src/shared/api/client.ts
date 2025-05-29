import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { env } from '@/core/config/env';
import { paths } from '@/core/config/paths';
import { useAuthStore } from '@/shared/auth';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  //   config.withCredentials = true; // 开启 cookie 跨域

  return config;
}

export const apiClient = axios.create({
  baseURL: env.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);

// 通用 API 响应类型
export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
}

// 通用错误类型
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
  response?: AxiosResponse;
}
