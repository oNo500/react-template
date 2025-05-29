import { toast } from '@repo/ui/components/sonner';
import { useMutation, useQuery } from '@tanstack/react-query';

import { type User, useAuthStore } from '../../auth';
import { type ApiError, type ApiResponse, apiClient } from '../client';
import { queryClient } from '../query-client';

// 类型定义
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// 登录
export const useLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: async (data: LoginRequest): Promise<AuthResponse> => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        '/api/auth/login',
        data,
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      login(data.user, data.token);
      toast.success(
        `Login success, welcome back ${data.user.name || data.user.email}!`,
      );
    },
    onError: (error: ApiError) => {
      toast.error(
        error.response?.data?.message || 'Please check your email and password',
      );
    },
  });
};

// 注册
export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterRequest): Promise<AuthResponse> => {
      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        '/api/auth/register',
        data,
      );
      return response.data.data;
    },
    onSuccess: () => {
      toast.success(
        'Registration successful, please log in with your new account',
      );
    },
    onError: (error: ApiError) => {
      toast.error(
        error.response?.data?.message ||
          'An error occurred during registration',
      );
    },
  });
};

// 获取当前用户信息
export const useCurrentUser = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ['current-user'],
    queryFn: async (): Promise<User> => {
      const response = await apiClient.get<ApiResponse<User>>('/api/auth/me');
      return response.data.data;
    },
    enabled: isAuthenticated,
  });
};

// 登出
export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/api/auth/logout');
    },
    onSuccess: () => {
      logout();
      toast.info('Logged out');
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
};
