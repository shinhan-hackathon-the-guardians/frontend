import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router
import HeaderBack from "@/components/Header/HeaderBack";

function VerificationCodePage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNumberClick = (number: string) => {
    if (password.length < 6) {
      const newPassword = password + number;
      setPassword(newPassword);

      if (newPassword.length === 6) {
        // Submit the password here
        handleSubmit(newPassword);
      }
    }
  };

  const handleDeleteClick = () => {
    setPassword(password.slice(0, -1));
  };

  const handleClearClick = () => {
    setPassword("");
  };

  const handleSubmit = (password: string) => {
    console.log("Submitted password:", password);
    // Perform your password submission logic here
    // For example, navigate back or to a success page
    navigate("/success"); // Example route
  };

  return (
    <div>
      <HeaderBack />
      <div className="flex flex-col items-center justify-evenly min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">인증 번호 입력</h2>
          <div className="flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-1 rounded-full ${
                  index < password.length ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 text-2xl w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number.toString())}
              className="text-black py-4"
            >
              {number}
            </button>
          ))}
          <button onClick={handleDeleteClick} className="text-black py-4">
            <FaDeleteLeft className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="text-black py-4"
          >
            0
          </button>
          <button onClick={handleClearClick} className="text-black py-4">
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationCodePage;
