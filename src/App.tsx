import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { messaging } from "@/utils/firebase";
import { getToken, onMessage } from "firebase/messaging";
import PaymentRequestModal from "@/components/Notification/PaymentRequestModal";
import { useNavigation } from "./hooks/useNavigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    accountInfo: "",
    amount: "0",
  });
  const { goToVerification } = useNavigation();

  useEffect(() => {
    // 알림 권한 요청 및 토큰 가져오기
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey:
            "BAWo9PXefNNss1PK-mO3E2Usodda1UzH7sv4oDjQuwEeT5UXbR-ZbPI0nk_460sEMB28MIwjJJFi-XT8Lb1n9TQ",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("FCM Token:", currentToken);
              // 서버에 토큰 전송 또는 저장 로직을 여기에 추가할 수 있습니다.
            } else {
              console.log("등록된 토큰이 없습니다.");
            }
          })
          .catch((err) => {
            if (err.response && err.response.status === 404) {
              console.warn(
                "토큰을 찾을 수 없습니다. 이미 삭제된 토큰일 수 있습니다."
              );
            } else {
              console.error("토큰 가져오기 오류:", err);
            }
          });
      }
    });

    // 포그라운드 메시지 수신 처리
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("메시지 수신:", payload);

      // 메시지 수신 시 Modal 데이터 설정
      const body = payload.notification?.body;
      const [name, accountInfo, amount] = body
        ? body.split(",")
        : ["", "", "0"];

      setModalData({
        name: name || "이름 정보 없음",
        accountInfo: accountInfo || "계좌 정보 없음",
        amount: amount,
      });
      setIsModalOpen(true);
    });

    // 컴포넌트 언마운트 시 이벤트 핸들러 해제
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    // 필요한 추가 로직을 여기 추가할 수 있습니다.
    goToVerification();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full sm:max-w-[360px] min-w-[344px] mx-auto bg-BackGround">
        <Outlet />
        <PaymentRequestModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          name={modalData.name}
          accountInfo={modalData.accountInfo}
          amount={modalData.amount}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
