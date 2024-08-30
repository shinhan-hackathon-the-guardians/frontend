import React from "react";
import splashImage from "@/assets/images/splash.png";
import { useNavigation } from "@/hooks/useNavigation";
import { useAuthStore } from "@/stores/userAuthStore";

const SplashScreen: React.FC = () => {
  const { goToHome, goToLogin } = useNavigation();
  const { isLogin } = useAuthStore();

  const handleClick = () => {
    if (isLogin) {
      goToHome();
    } else {
      goToLogin();
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-Button text-white text-center"
      onClick={handleClick}
    >
      <p className="text-lg mb-36">
        언제 어디서나
        <br />
        가족을 지키는,
      </p>
      <div className="mb-8">
        <img src={splashImage} alt="splash" className="w-32 object-contain" />
      </div>
    </div>
  );
};

export default SplashScreen;
