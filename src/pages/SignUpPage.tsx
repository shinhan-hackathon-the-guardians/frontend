import React, { useState } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";

type Gender = "남성" | "여성" | "기타";

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

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState<SignUpForm>({
    username: "",
    password: "",
    passwordCheck: "",
    name: "",
    gender: "남성",
    birthDate: "",
    phoneNumber: "",
    accountNumber: "",
    bank: "",
  });
  const [phoneParts, setPhoneParts] = useState(["", "", ""]);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhoneParts = [...phoneParts];
    newPhoneParts[index] = value
      .replace(/\D/g, "")
      .slice(0, index === 0 ? 3 : 4);
    setPhoneParts(newPhoneParts);
    setForm((prev) => ({ ...prev, phoneNumber: newPhoneParts.join("-") }));

    if (value.length === (index === 0 ? 3 : 4) && index < 2) {
      document.getElementById(`phonePart${index + 2}`)?.focus();
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, birthDate: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("Form submitted", form);
  };

  const handleAccountAuth = () => {
    console.log("Account authentication requested for:", form.accountNumber);
    // Here you would typically make an API call to verify the account
    // For now, we'll just simulate a successful authentication
    alert("계좌 인증이 완료되었습니다.");
  };

  const handleUsernameCheck = () => {
    console.log("Username availability check requested for:", form.username);
    if (form.username.length < 4) {
      alert("아이디는 4자 이상이어야 합니다.");
    } else {
      alert("사용 가능한 아이디입니다.");
    }
  };

  const renderPhoneInputs = () => (
    <div className="flex items-center space-x-2">
      {[0, 1, 2].map((index) => (
        <React.Fragment key={index}>
          <input
            id={`phonePart${index + 1}`}
            type="text"
            value={phoneParts[index]}
            onChange={(e) => handlePhoneChange(index, e.target.value)}
            className="w-1/3 border rounded p-1 mt-2 text-center outline-none focus:border-Button focus:border-2"
          />
          {index < 2 && <span>-</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <main className="px-4 py-6 flex flex-col">
        <h1 className="text-xl font-bold text-Button mb-2">회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center ">
              <InputField
                label="아이디"
                placeholder="아이디를 입력해주세요."
                value={form.username}
                onChange={(value) => handleChange("username", value)}
              />
              <button
                type="button"
                className="w-32 ms-3 mb-3 h-10 rounded-lg border border-Button text-Button hover:bg-Button hover:text-white transition duration-200 ease-in-out"
                onClick={handleUsernameCheck}
              >
                중복 체크
              </button>
            </div>
            <InputField
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              value={form.password}
              onChange={(value) => handleChange("password", value)}
            />
            <InputField
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
              value={form.passwordCheck}
              onChange={(value) => handleChange("passwordCheck", value)}
            />
            <InputField
              label="이름"
              placeholder="이름을 입력해주세요."
              value={form.name}
              onChange={(value) => handleChange("name", value)}
            />
            <div className="flex justify-between">
              <div className="flex flex-1 me-3">
                <SelectField
                  label="성별"
                  options={["남성", "여성", "기타"] as const}
                  value={form.gender}
                  onChange={(value) => handleChange("gender", value)}
                />
              </div>
              <div className="text-grey">
                <label className="block text-md font-semibold">생년월일</label>
                <input
                  type="date"
                  name="birthDate"
                  value={form.birthDate}
                  onChange={handleDateChange}
                  className="w-full h-10 p-2 border-b border-grey outline-none focus:border-Button focus:border-b-2"
                  required
                />
              </div>
            </div>
            <div className="text-grey font-semibold my-6">
              <label>연락처</label>
              {renderPhoneInputs()}
            </div>
            <div className="flex items-center">
              <InputField
                label="계좌번호"
                placeholder="계좌번호를 입력해주세요."
                value={form.accountNumber}
                onChange={(value) => handleChange("accountNumber", value)}
              />
              <button
                type="button"
                className="w-32 ms-3 mb-3 h-10 rounded-lg border border-Button text-Button hover:bg-Button hover:text-white transition duration-200 ease-in-out"
                onClick={handleAccountAuth}
              >
                인증하기
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-Button text-white rounded hover:bg-blue-600 mt-4"
          >
            가입하기
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
