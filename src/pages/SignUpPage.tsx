import React, { useContext, useState } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import { userAuthService } from "@/services/userAuthService";
import { useNavigation } from "@/hooks/useNavigation";
import { CurrentTokenContext } from "@/App";
import toast, { Toaster } from "react-hot-toast";

type Gender = "MALE" | "FEMALE";

interface SignUpForm {
  username: string;
  password: string;
  password_check: string;
  name: string;
  gender: Gender;
  birth_date: string;
  phone_number: string;
  account_number: string;
  csrf_token: string;
}

const SignUpPage: React.FC = () => {
  const deviceToken = useContext(CurrentTokenContext);

  const [form, setForm] = useState<SignUpForm>({
    username: "",
    password: "",
    password_check: "",
    name: "",
    gender: "MALE",
    birth_date: "",
    phone_number: "",
    account_number: "",
    csrf_token: "",
  });
  const [phoneParts, setPhoneParts] = useState(["010", "", ""]);
  const [isAccountVerified, setIsAccountVerified] = useState(false);
  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [showAuthCodeInput, setShowAuthCodeInput] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const { goToLogin } = useNavigation();

  const handleChange = (name: keyof SignUpForm, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhoneParts = [...phoneParts];
    newPhoneParts[index] = value.replace(/\D/g, "").slice(0, index === 0 ? 3 : 4);
    setPhoneParts(newPhoneParts);
    setForm((prev) => ({ ...prev, phone_number: newPhoneParts.join("-") }));

    if (value.length === (index === 0 ? 3 : 4) && index < 2) {
      document.getElementById(`phonePart${index + 2}`)?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.password_check) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!isAccountVerified) {
      toast.error("계좌 인증이 필요합니다.");
      return;
    }
    if (!isUsernameChecked) {
      toast.error("아이디 중복 체크가 필요합니다.");
      return;
    }
    try {
      await userAuthService.signup(form);
      toast.success("회원가입이 완료되었습니다.");
      goToLogin();
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleAccountAuth = async () => {
    try {
      const response = await userAuthService.sendAuthenticationAccount(
        form.account_number,
        deviceToken!
      );
      setForm((prev) => ({ ...prev, csrf_token: response.csrf_token }));
      setShowAuthCodeInput(true);
      toast.success("인증 코드가 발송되었습니다. 입력해주세요.");
    } catch (error) {
      console.error("Failed to send authentication code:", error);
      toast.error("인증 코드 발송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleAuthCodeVerification = async () => {
    try {
      const response = await userAuthService.authenticateAccount(
        form.account_number,
        form.csrf_token,
        authCode
      );
      setForm((prev) => ({ ...prev, csrf_token: response.csrf_token }));
      setIsAccountVerified(true);
      toast.success("계좌가 성공적으로 인증되었습니다.");
    } catch (error) {
      console.error("Failed to verify auth code:", error);
      toast.error("인증에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleUsernameCheck = async () => {
    if (form.username.length < 4) {
      toast.error("아이디는 4자 이상이어야 합니다.");
      return;
    }
    setIsUsernameChecked(true);
    toast.success("사용 가능한 아이디입니다.");
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
            className="w-1/3 text-sm border font-normal rounded p-1 mt-2 text-center outline-none focus:border-Button focus:border-2"
          />
          {index < 2 && <span>-</span>}
        </React.Fragment>
      ))}
    </div>
  );

  const isFormValid = isAccountVerified && isUsernameChecked;

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <Toaster position="top-center" reverseOrder={false} />
      <main className="px-4 py-6 flex flex-col">
        <h1 className="text-xl font-bold text-Button mb-2">회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <InputField
                label="아이디"
                placeholder="아이디를 입력해주세요."
                value={form.username}
                onChange={(value) => handleChange("username", value)}
              />
              <button
                type="button"
                className="w-32 text-sm ml-3 h-10 rounded-lg border border-Button text-Button hover:bg-Button hover:text-white transition duration-200 ease-in-out"
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
              value={form.password_check}
              onChange={(value) => handleChange("password_check", value)}
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
                  options={["MALE", "FEMALE"] as const}
                  value={form.gender}
                  onChange={(value) => handleChange("gender", value as Gender)}
                />
              </div>
              <div className="text-grey">
                <label className="block text-md mb-1 font-semibold">생년월일</label>
                <input
                  type="date"
                  name="birth_date"
                  value={form.birth_date}
                  onChange={(e) => handleChange("birth_date", e.target.value)}
                  className="text-sm px-1 w-full h-10 border-b border-grey outline-none focus:border-Button focus:border-b-2"
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
                value={form.account_number}
                onChange={(value) => handleChange("account_number", value)}
              />
              <button
                type="button"
                className={`text-sm w-32 ml-3 h-10 rounded-lg transition duration-200 ease-in-out ${
                  isAccountVerified
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "border border-Button text-Button hover:bg-Button hover:text-white"
                }`}
                onClick={handleAccountAuth}
                disabled={isAccountVerified}
              >
                송금하기
              </button>
            </div>
            {showAuthCodeInput && (
              <div className="flex items-center mt-4">
                <InputField
                  label="인증 코드"
                  placeholder="인증 코드를 입력해주세요."
                  value={authCode}
                  onChange={(value) => setAuthCode(value)}
                />
                <button
                  type="button"
                  className={`w-32 ms-3 mb-3 h-10 rounded-lg transition duration-200 ease-in-out ${
                    isAccountVerified
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "border border-Button text-Button hover:bg-Button hover:text-white"
                  }`}
                  onClick={handleAuthCodeVerification}
                  disabled={isAccountVerified}
                >
                  인증하기
                </button>
              </div>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded mt-2 ${
              isFormValid
                ? "bg-Button text-white hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed text-white"
            }`}
            disabled={!isFormValid}
          >
            가입하기
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
