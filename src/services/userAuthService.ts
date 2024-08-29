import { User } from "@/types/User";
import { useAuthStore } from "@/stores/userAuthStore";
import axiosInstance from "@/services/axiosInstance";

// 회원가입 데이터 인터페이스 // snake_case 안지키면 서버에서 다 400에러남
interface SignupData {
  username: string;
  password: string;
  password_check: string;
  name: string;
  gender: "MALE" | "FEMALE";
  birth_date: string;
  phone_number: string;
  account_number: string;
  csrf_token: string;
}

// API functions
export const userAuthService = {
  // 로그인
  login: async (username: string, password: string): Promise<void> => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      const user = response.data;
      useAuthStore.getState().login(user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  // 로그아웃
  logout: async (): Promise<void> => {
    try {
      await axiosInstance.post("/auth/logout");
      useAuthStore.getState().logout();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  },

  // 아이디 중복 체크
  checkUsername: async (username: string): Promise<boolean> => {
    try {
      const response = await axiosInstance.get("/auth/check-username", {
        params: { username },
      });
      return response.data.available;
    } catch (error) {
      console.error("Username check failed:", error);
      throw error;
    }
  },

  // 계좌 송금 (인증 코드 발송)
  sendAuthenticationAccount: async (
    account_number: string
  ): Promise<{ account_number: string; csrf_token: string; auth_code: string }> => {
    try {
      const response = await axiosInstance.post("/user/accountAuthCode", {
        account_number,
      });
      return {
        account_number: response.data.account_number,
        csrf_token: response.data.csrf_token,
        auth_code: response.data.auth_code,
      };
    } catch (error) {
      console.error("Failed to send authentication account:", error);
      throw error;
    }
  },

  // 계좌 인증 (인증 코드 확인)
  authenticateAccount: async (
    account_number: string,
    csrf_token: string,
    auth_code: string
  ): Promise<{ account_number: string; csrf_token: string }> => {
    try {
      const response = await axiosInstance.post("/user/accountAuthCode/check", {
        account_number,
        csrf_token,
        auth_code,
      });
      return {
        account_number: response.data.account_number,
        csrf_token: response.data.csrf_token,
      };
    } catch (error) {
      console.error("Account authentication failed:", error);
      throw error;
    }
  },

  // 회원가입
  signup: async (signupData: SignupData): Promise<void> => {
    try {
      await axiosInstance.post("/signup", signupData);
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  },

  // 현재 사용자 정보 가져오기
  // getCurrentUser: async (): Promise<User | null> => {
  //   try {
  //     const response = await axiosInstance.get("/user/info");
  //     const user = response.data;
  //     useAuthStore.getState().setUser(user);
  //     return user;
  //   } catch (error) {
  //     console.error("Failed to get current user:", error);
  //     useAuthStore.getState().logout();
  //     return null;
  //   }
  // },
};

// 앱 시작 시 인증 상태 초기화
// 보통 이렇게 함수 하나당 export하는 방식
// 위에서 userAuthService로 묶은 것은
// getUserLogin보단 userAuthService.login이
// 나아 보였기 때문
// 다른 파일에서는 export만 하는 것을 추천
export const initializeAuthState = async () => {
  // try {
  // const sessionUser = await userAuthService.getCurrentUser(); // @주의@ 이거 초기화 시 호출이라 회원가입 해보기도 전에 User없어서 터진다;
  // if (sessionUser) {
  // useAuthStore.getState().login(sessionUser);
  // }
  // } catch (error) {
  // console.error("Failed to initialize auth state:", error);
  // }
};

// 앱 시작 시 인증 상태 초기화 함수 호출
initializeAuthState();
