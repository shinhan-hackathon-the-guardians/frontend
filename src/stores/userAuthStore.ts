import { create } from "zustand";
import { User } from "@/types/User";

interface AuthState {
  isLogin: boolean;
  user: User | null;
}

interface AuthAction {
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  isLogin: false,
  user: null,
  login: (user: User) => {
    set({ isLogin: true, user });
  },
  logout: () => {
    set({ isLogin: false, user: null });
  },
  setUser: (user: User | null) => {
    set({ user, isLogin: !!user });
  },
}));
