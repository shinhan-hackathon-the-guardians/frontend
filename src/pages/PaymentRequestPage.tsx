import { messaging } from "@/utils/firebase";
import { getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router
import UnreadSticker from "@/components/Notification/UnreadSticker";
import PaymentRequestModal from "@/components/Notification/PaymentRequestModal"; // Import the modal component
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";

interface PaymentRequest {
  name: string;
  accountInfo: string;
  amount: number;
}

const paymentRequests: PaymentRequest[] = [
  {
    name: "김서준",
    accountInfo: "신한 123-456-78910",
    amount: 1000000,
  },
  // Add more requests here if needed
];

function PaymentRequestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<PaymentRequest | null>(
    null
  );
  const navigate = useNavigate();

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
              // 서버에 토큰 전송 또는 저장
              /*axios
                .post("/api/save-token", { token: currentToken })
                .then((response) => {
                  console.log("토큰이 성공적으로 저장되었습니다.");
                })
                .catch((error) => {
                  console.error("토큰 저장 오류:", error);
                });*/
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
      // 필요 시 사용자에게 알림 표시 또는 상태 업데이트
    });

    // 컴포넌트 언마운트 시 이벤트 핸들러 해제
    return () => {
      unsubscribe();
    };
  }, []);

  const handleClick = (request: PaymentRequest) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    // Navigate to the Verification Code page
    navigate("/verification"); // Example route
  };

  return (
    <div>
      <HeaderBackChatNotify />
      <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center">
        <div className="w-full flex justify-start p-6">
          <h1 className="flex items-end text-xl font-bold">
            <div className="text-2xl font-bold">김신한</div> 님의 요청내역
          </h1>
        </div>

        {paymentRequests.map((request, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs bg-white shadow-md rounded-lg p-6 mb-6 cursor-pointer"
            onClick={() => handleClick(request)}
          >
            <UnreadSticker />
            <div className="flex flex-col gap-4">
              <div className="flex justify-start">
                <span className="text-sm text-gray-900">
                  {request.accountInfo}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl text-gray-900">
                  {request.amount.toLocaleString()}원
                </span>
                <span className="text-sm text-gray-900">잔액 12,345원</span>
              </div>
            </div>
          </div>
        ))}

        {selectedRequest && (
          <PaymentRequestModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
            name={selectedRequest.name}
            accountInfo={selectedRequest.accountInfo}
            amount={selectedRequest.amount}
          />
        )}
      </div>
    </div>
  );
}

export default PaymentRequestPage;
