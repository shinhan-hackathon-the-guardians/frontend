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

export const initializeAuthState = async () => {
  try {
    // 서버에서 현재 세션 정보를 가져오는 API 호출
    // const sessionUser = await api.getCurrentUser();
    const sessionUser = null; // 임시로 null 설정, 실제 구현시 위 주석의 API 호출로 대체
    if (sessionUser) {
      useAuthStore.getState().login(sessionUser);
    }
  } catch (error) {
    console.error("Failed to initialize auth state:", error);
  }
};

// 앱 시작 시 인증 상태 초기화
initializeAuthState();
