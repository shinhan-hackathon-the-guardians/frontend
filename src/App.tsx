import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { messaging } from "@/utils/firebase";
import { getToken, onMessage } from "firebase/messaging";
import PaymentRequestModal from "@/components/Notification/PaymentRequestModal";
import NotificationModal from "@/components/Notification/NotificationModal";
import { notificationService } from "@/services/notificationService";
import UnifiedModal from "./components/Notification/UnifiedModal";
import FamilyInviteModal from "./components/Notification/FamilyInviteModal";
import AuthNotificationModal from "./components/Notification/AuthNotificationModal";
// import { useNavigation } from "./hooks/useNavigation";

export const CurrentTokenContext = createContext<string | null>(null);

interface ModalData {
  notificationId: number;
  name: string;
  accountInfo: string;
  amount: string;
  familyId: number;
  description: string;
  ownerName: string;
  transactionType: string;
  senderAccountNumber: string;
  receiver: string;
  transactionBalance: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [deviceToken, setdeviceToken] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    | "payment"
    | "notification"
    | "auth"
    | "familyInvite"
    | "deposit"
    | "approvalRequest"
    | "transactionResult"
  >("payment");
  // const [modalData, setModalData] = useState<unknown>({});
  const [modalData, setModalData] = useState<ModalData>({
    notificationId: 0,
    name: "",
    accountInfo: "",
    amount: "0",
    familyId: 0,
    description: "",
    ownerName: "",
    transactionType: "",
    senderAccountNumber: "",
    receiver: "",
    transactionBalance: "0",
  });
  // const { goToVerification } = useNavigation();

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
              setdeviceToken(currentToken);
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
      const title = payload.notification?.title;
      const body = payload.notification?.body
        ? JSON.parse(payload.notification.body)
        : null;
      const notificationId = payload.data?.notificationId || 0;

      if (!body) {
        console.error("Error: Invalid message body" + notificationId);
        return;
      }

      switch (title) {
        case "인증":
          setModalType("auth");
          setModalData((prevData) => ({
            ...prevData,
            name: body.auth_code || "은행 정보 없음",
            accountInfo: body.bank + " " + body.account_no || "계좌 정보 없음",
            amount: body.transaction_balance?.toString() || "0",
            description: body.bank || "인증 코드 없음",
          }));
          break;
        case "가족초대":
          setModalType("familyInvite");
          setModalData((prevData) => ({
            ...prevData,
            familyId: body.id || 0,
            name: body.name || "이름 정보 없음",
            description: body.description || "설명 없음",
            ownerName: body.owner_name || "소유자 이름 없음",
          }));
          break;

        case "입금 알림":
          setModalType("deposit");
          setModalData((prevData) => ({
            ...prevData,
            name: body.name || "이름 정보 없음",
            accountInfo: body.account_number || "계좌 정보 없음",
            amount: body.transaction_balance?.toString() || "0",
          }));
          break;

        case "승인요청":
          setModalType("approvalRequest");
          setModalData((prevData) => ({
            ...prevData,
            notificationId: body.notification_id || 0,
            transactionType: body.transaction_type || "거래 타입 없음",
            senderAccountNumber:
              body.sender_account_number || "송신자 계좌 번호 없음",
            receiver: body.receiver || "수신자 정보 없음",
            transactionBalance: body.transaction_balance?.toString() || "0",
          }));
          break;

        case "거래 성공":
        case "거래 실패":
          setModalType("transactionResult");
          setModalData((prevData) => ({
            ...prevData,
            notificationId: body.notification_id || 0,
            transactionType: body.transaction_type || "거래 타입 없음",
            senderAccountNumber:
              body.sender_account_number || "송신자 계좌 번호 없음",
            receiver: body.receiver || "수신자 정보 없음",
            transactionBalance: body.transaction_balance?.toString() || "0",
          }));
          break;

        default:
          console.warn("Unknown notification title:", title);
          break;
      }

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

  const handleModalConfirm = async () => {
    try {
      if (modalData.notificationId) {
        await notificationService.replyNotification(
          modalData.notificationId,
          true
        );
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error confirming notification:", error);
    }
  };

  const handleModalReject = async () => {
    try {
      if (modalData.notificationId) {
        await notificationService.replyNotification(
          modalData.notificationId,
          false
        );
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error rejecting notification:", error);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentTokenContext.Provider value={deviceToken}>
        <div className="w-full sm:max-w-[360px] min-w-[344px] mx-auto bg-BackGround">
          <Outlet />
          {modalType === "payment" && ( // 결제
            <PaymentRequestModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              onConfirm={handleModalConfirm}
              onReject={handleModalReject}
              name={modalData.name}
              accountInfo={modalData.accountInfo}
              amount={modalData.amount}
            />
          )}
          {modalType === "auth" && ( // 결제
            <AuthNotificationModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              name={modalData.name}
              accountInfo={modalData.accountInfo}
              amount={modalData.amount}
            />
          )}
          {["notification", "deposit"].includes(modalType) && ( // 초대
            <NotificationModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              name={modalData.name}
              accountInfo={modalData.accountInfo}
              amount={modalData.amount}
            />
          )}
          {/* {modalType === "auth" && ( // 인증
            <AuthNotificationModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              name={modalData.name}
              accountInfo={modalData.accountInfo}
              amount={modalData.amount}
            />
          )} */}
          {modalType === "familyInvite" && (
            <FamilyInviteModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              familyId={modalData.familyId}
              name={modalData.name}
              description={modalData.description}
              ownerName={modalData.ownerName}
            />
          )}
          {/* {modalType === "deposit" && (
            <DepositModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              name={modalData.name}
              accountInfo={modalData.accountInfo}
              amount={modalData.amount}
            />
          )} */}
          {["approvalRequest", "transactionResult"].includes(modalType) && (
            <UnifiedModal
              isOpen={isModalOpen}
              onClose={handleModalClose}
              notificationId={modalData.notificationId}
              transactionType={modalData.transactionType}
              senderAccountNumber={modalData.senderAccountNumber}
              receiver={modalData.receiver}
              transactionBalance={modalData.transactionBalance}
              title={
                modalType === "approvalRequest" ? "승인 요청" : "거래 결과"
              }
            />
          )}
        </div>
      </CurrentTokenContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
