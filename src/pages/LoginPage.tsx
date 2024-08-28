import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // 회원가입 페이지로 이동하기 위한 라우팅 라이브러리

function LoginPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 요청 로직 추가
    console.log("Login form submitted", form);
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // 회원가입 페이지로 이동
  };

  return (
    <div className="flex-col items-center p-6 h-screen">
      <div className="relative flex justify-center items-center mb-24">
        <IoMdArrowRoundBack
          className="text-[24px] absolute left-0 cursor-pointer"
          onClick={() => navigate(-1)} // 뒤로 가기 기능 추가
        />
        <h1 className="text-3xl font-bold">로그인</h1>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <br />
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-12"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 w-full h-10 rounded-[10px] border-2 border-blue-500 font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
          >
            로그인
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleSignUpRedirect}
          className="w-full h-10 rounded-[10px] border-2 border-gray-500 font-bold text-gray-500 hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
