import axiosInstance from "./axiosInstance";

export const notificationService = {
  // 그룹 초대 요청 목록 조회
  getApproval: async () => {
    try {
      const response = await axiosInstance.get("/approval");
      return response.data;
    } catch (error) {
      console.error("🚨 [NotificationService] | Error in getApproval:", error);
      throw error;
    }
  },

  // 그룹 초대 응답 전송 (true= 수락, false= 거절)
  replyApproval: async (approval_id: number, accept_status: boolean) => {
    try {
      const response = await axiosInstance.post("/approval/reply", {
        approval_id,
        accept_status,
      });
      return response.data;
    } catch (error) {
      console.error("🚨 [NotificationService] | Error in replyApproval:", error);
      throw error;
    }
  },

  // (이체 내역) 알림 응답 전송
  replyNotification: async (notificationId: number, isApprove: boolean) => {
    try {
      const response = await axiosInstance.post("/notification/reply", {
        notificationId: notificationId,
        is_approve: isApprove,
      });
      return response.data;
    } catch (error) {
      console.error("🚨 [NotificationService] | Error in replyNotification:", error);
      throw error;
    }
  },

  // 대기 중인 (이체 내역) 알림 조회
  getUnansweredNotifications: async () => {
    try {
      const response = await axiosInstance.get("/notification/unanswered");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("🚨 [NotificationService] | Error in getUnansweredNotifications:", error);
      throw error;
    }
  },

  // 특정 (이체 내역) 알림 상세 조회
  getNotificationDetails: async (notificationId: number) => {
    try {
      const response = await axiosInstance.get(`/notification/${notificationId}`);
      return response.data;
    } catch (error) {
      console.error("🚨 [NotificationService] | Error in getNotificationDetails:", error);
      throw error;
    }
  },
};
