import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

type Gender = "male" | "female" | "other";

interface SignUpForm {
  username: string;
  password: string;
  passwordCheck: string;
  name: string;
  gender: Gender;
  birthDate: string;
  phoneNumber: string;
  accountNumber: string;
  bank: string;
}

function SignUpPage() {
  const [phonePart1, setPhonePart1] = useState("");
  const [phonePart2, setPhonePart2] = useState("");
  const [phonePart3, setPhonePart3] = useState("");

  const handlePhonePart1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3); // 숫자만 입력, 최대 3자리
    setPhonePart1(value);
    if (value.length === 3) {
      document.getElementById("phonePart2")?.focus();
    }
  };

  const handlePhonePart2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4); // 숫자만 입력, 최대 4자리
    setPhonePart2(value);
    if (value.length === 4) {
      document.getElementById("phonePart3")?.focus();
    }
  };

  const handlePhonePart3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4); // 숫자만 입력, 최대 4자리
    setPhonePart3(value);
  };

  const [form, setForm] = useState<SignUpForm>({
    username: "",
    password: "",
    passwordCheck: "",
    name: "",
    gender: "male",
    birthDate: "",
    phoneNumber: "",
    accountNumber: "",
    bank: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      birthDate: e.target.value,
    });
  };

  const handleAccountAuth = () => {
    // 인증 로직 추가
    console.log("Account authentication requested");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const fullPhoneNumber = `${phonePart1}-${phonePart2}-${phonePart3}`;
    if (form.password !== form.passwordCheck) {
      alert("Passwords do not match");
      return;
    }
    // 회원가입 요청 로직 추가
    console.log("Form submitted", form);
  };

  return (
    <div className="flex-col items-center p-6 h-screen">
      <IoMdArrowRoundBack className="text-[24px] absolute top-7 left-4" />
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-6">회원가입</h1>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <br />
          <div className="flex space-x-2">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              // onClick={handleUsernameCheck}
              className="w-40 h-10 rounded-[20px] border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
            >
              중복 체크
            </button>
          </div>
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <br />
          <input
            type="password"
            name="passwordCheck"
            value={form.passwordCheck}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label>이름</label>
          <br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label>성별</label>
            <br />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full h-10 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>생일</label>
            <br />
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleDateChange}
              className="w-full h-10 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label>연락처</label>
          <br />
          <div className="flex space-x-2">
            <input
              type="text"
              value={phonePart1}
              onChange={handlePhonePart1Change}
              className="flex-1 border rounded p-2 text-center"
              required
            />
            {" - "}
            <input
              type="text"
              id="phonePart2"
              value={phonePart2}
              onChange={handlePhonePart2Change}
              className="flex-1 border rounded p-2 text-center"
              required
            />
            {" - "}
            <input
              type="text"
              id="phonePart3"
              value={phonePart3}
              onChange={handlePhonePart3Change}
              className="flex-1 border rounded p-2 text-center"
              required
            />
          </div>
        </div>
        {/* <div>
          <label>은행</label>
          <br />
          <select
            name="bank"
            value={form.bank}
            onChange={handleChange}
            required
          >
            <option value="">Select Bank</option>
            <option value="bankA">Bank A</option>
            <option value="bankB">Bank B</option>
            <option value="bankC">Bank C</option>
          </select>
        </div> */}
        <div>
          <label>계좌번호</label>
          <br />
          <div className="flex space-x-2">
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              className="w-full h-10 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleAccountAuth}
              className="w-40 h-10 rounded-[20px] border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
            >
              인증하기
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 w-full h-10 rounded-[10px] border-2 border-blue-500 font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
