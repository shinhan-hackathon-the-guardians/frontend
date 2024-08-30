import { useEffect, useState } from "react";
import HeaderBack from "@/components/Header/HeaderBack";
import { notificationService } from "@/services/notificationService";
import PaymentRequestModal from "@/components/Notification/PaymentRequestModal";
// import "@/mock/mock";

interface Approval {
  approval_id: number;
  family_id: number;
  family_name: string;
  family_description: string;
}

interface Notification {
  notification_id: number;
  sender_name: string;
  transaction_time: string;
  transaction_balance: number;
  transaction_type: string;
  account_number: string;
}

function NotificationPage() {
  const [approval, setApproval] = useState<Approval | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal 상태 관리
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null); // 선택된 Notification 관리

  // 대기 중인 알림 목록 가져오기
  const fetchNotifications = async () => {
    try {
      const notificationData =
        await notificationService.getUnansweredNotifications();
      setNotifications(notificationData);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    // 그룹 초대 요청 목록 가져오기
    const fetchApproval = async () => {
      try {
        const approvalData = await notificationService.getApproval();
        setApproval(approvalData);
      } catch (error) {
        console.error("Error fetching approval:", error);
      }
    };

    fetchApproval();
    fetchNotifications();
  }, []);

  const handleApprovalReply = async (
    approvalId: number,
    approvalStatus: boolean
  ) => {
    try {
      await notificationService.replyApproval(approvalId, approvalStatus);
      // 응답 후 다시 데이터 갱신
      setApproval(null);
      console.log(approval);
    } catch (error) {
      console.error("Error sending approval reply:", error);
    }
  };

  const handleNotificationReply = async (isApprove: boolean) => {
    if (selectedNotification) {
      try {
        await notificationService.replyNotification(
          selectedNotification.notification_id,
          isApprove
        );
        setNotifications([]); // notifications 초기화
        await fetchNotifications(); // fetchNotifications 실행
        closeModal();

        // console.log(selectedNotification);
      } catch (error) {
        console.error("Error sending notification reply:", error);
      }
    }
  };

  const openModal = (notification: Notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div>
      <HeaderBack />
      <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center">
        <div className="w-full flex justify-start px-6 py-2">
          <span className="text-xl font-bold">그룹 초대</span>
        </div>

        {approval && (
          <div className="w-full max-w-md bg-white shadow-md rounded-lg px-6 py-4 mb-6">
            <h2 className="text-lg font-semibold mb-1">
              {approval.family_name}
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              {approval.family_description}
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handleApprovalReply(approval.approval_id, true)}
              >
                수락
              </button>
              <button
                className="bg-red text-white py-2 px-4 rounded"
                onClick={() => handleApprovalReply(approval.approval_id, false)}
              >
                거절
              </button>
            </div>
          </div>
        )}

        <div className="w-full flex justify-start px-6 py-2">
          <span className="text-xl font-bold">이체 내역</span>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification.notification_id}
            className="w-full max-w-md bg-white shadow-md rounded-lg px-6 py-4 mb-6"
            onClick={() => openModal(notification)}
          >
            <span className="text-sm text-gray-600">
              {notification.transaction_time}
            </span>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 mt-2 block">
                신한 {notification.account_number}
              </span>
              <span className="text-sm text-gray-900">
                {notification.sender_name}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span
                className={`text-sm ${
                  notification.transaction_type === "DEPOSIT"
                    ? "text-red"
                    : "text-blue-500"
                }`}
              >
                {notification.transaction_type === "DEPOSIT"
                  ? "입금"
                  : notification.transaction_type === "WITHDRAWAL"
                  ? "출금"
                  : notification.transaction_type === "TRANSFER"
                  ? "이체"
                  : "결제"}
              </span>
              <span className="text-xl font-semibold text-gray-900">
                {notification.transaction_balance.toLocaleString()}원
              </span>
            </div>
          </div>
        ))}

        {selectedNotification && (
          <PaymentRequestModal
            isOpen={isModalOpen}
            onClose={() => handleNotificationReply(false)} // 아니오 버튼 클릭 시
            onConfirm={() => handleNotificationReply(true)} // 예 버튼 클릭 시
            name={selectedNotification.sender_name}
            accountInfo={selectedNotification.account_number}
            amount={selectedNotification.transaction_balance.toString()}
          />
        )}
      </div>
    </div>
  );
}

export default NotificationPage;
