import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/types/User";

interface AuthState {
  isLogin: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLogin: false,
      user: null,
      login: (user: User) => set({ isLogin: true, user }),
      logout: () => set({ isLogin: false, user: null }),
    }),
    {
      name: "userAuth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
