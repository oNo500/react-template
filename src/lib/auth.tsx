import { AuthResponse, User } from '@/types/api';
import { z } from 'zod';
import { api } from './api-client';
import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Spinner } from '@/components/ui/spinner';

/**
 * Login fields
 */
export const loginInputSchema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

/**
 * Register fields
 */
export const registerInputSchema = z.object({
  username: z.string().min(1, 'Required'),
  nikename: z.string().min(1, 'Required'),
  password: z.string().min(5, 'Required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const getuser = async (): Promise<User> => {
  const response = await api.get('/auth/user');
  return response as any;
};
const logout = (): Promise<void> => {
  return api.post('/auth/logout');
};
const loginWithNameAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};
const registerWithNameAndPassword = (data: RegisterInput): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

const authConfig = {
  userFn: getuser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithNameAndPassword(data);
    return response as any;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithNameAndPassword(data);
    return response as any;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } = configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();
  if (user.isLoading) {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <Spinner />
      </div>
    );
  }
  if (!user.data) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace state={{ from: location }} />;
  }
  return children;
};
