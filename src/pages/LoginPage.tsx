import React, { useState, useContext } from "react";
import { useNavigation } from "@/hooks/useNavigation";
import { userAuthService } from "@/services/userAuthService";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import { CurrentTokenContext } from "@/App";

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const currentToken = useContext(CurrentTokenContext);
  const { goToHome, goToSignUp } = useNavigation();

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userAuthService.login(form.username, form.password);
      console.log("Login successful");

      if (currentToken) {
        await userAuthService.saveDeviceToken(currentToken); // 로그인 성공 시 deviceToken 전송
        console.log("Device token sent successfully");
      }

      goToHome();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <HeaderBackChatNotify />
      <main className="px-4 py-6 flex-1 flex flex-col h-full">
        <h1 className="text-xl font-bold text-Button mb-2">로그인</h1>

        <form className="flex-1 h-full flex flex-col justify-between" onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg p-4 mb-4">
            <InputField
              label="아이디"
              placeholder="아이디를 입력해주세요."
              value={form.username}
              onChange={(value) => handleChange("username", value)}
            />
            <InputField
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              value={form.password}
              onChange={(value) => handleChange("password", value)}
            />
          </div>

          <div className="mt-auto">
            <button
              type="submit"
              className="w-full py-3 bg-Button text-white rounded hover:bg-blue-600 mt-4"
            >
              로그인
            </button>
            <button
              onClick={goToSignUp}
              className="w-full py-3 bg-gray-300 text-white rounded hover:bg-gray-400 mt-4"
            >
              회원가입
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
