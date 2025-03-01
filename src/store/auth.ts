import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TokenStore = {
  token: string;
  setToken: (token: string) => void;
};

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

const useTokenStore = create<TokenStore>()(
  persist(
    (set) => ({
      token: "",
      setToken: (token) => set({ token }),
    }),
    {
      name: "bear-storage",
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser: (user) => set({ user }),
    }),
    {
      name: "userinfo",
      storage: createJSONStorage(() => window.localStorage),
    }
  )
);

export type User = {
  name: string;
  age: number;
};

type AuthStore = {
  token: string | null;
  user: User;
  isLogin: boolean;
  setAuth: (data: { token: string; user: User }) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: {} as User,
  isLogin: false,
  setAuth: ({ token, user }) => set({ token, user, isLogin: true }),
  clear: () => set({ token: null, user: {} as User, isLogin: false }),
}));
