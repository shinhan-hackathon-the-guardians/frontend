import { useEffect, useState } from "react";
import HeaderBack from "@/components/Header/HeaderBack";
import { notificationService } from "@/services/notificationService";
import "@/mock/mock";

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
    } catch (error) {
      console.error("Error sending approval reply:", error);
    }
  };

  return (
    <div>
      <HeaderBack />
      <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center">
        <div className="w-full flex justify-start px-6 py-2">
          <span className="text-xl font-bold">알림</span>
        </div>

        {approval && (
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              {approval.family_name} 그룹 가입 신청
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              {approval.family_description}
            </p>
            <div className="flex justify-end gap-4">
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

        {notifications.map((notification) => (
          <div
            key={notification.notification_id}
            className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-900">
                {notification.sender_name}
              </span>
              <span className="text-sm text-gray-600">
                {notification.transaction_time}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold text-gray-900">
                {notification.transaction_balance.toLocaleString()}원
              </span>
              <span className="text-sm text-gray-600">
                {notification.transaction_type}
              </span>
            </div>
            <span className="text-sm text-gray-600 mt-2 block">
              계좌 번호: {notification.account_number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
