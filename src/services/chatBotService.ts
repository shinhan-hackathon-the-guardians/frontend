import axiosInstance from "./axiosInstance";
import { ChatBotHistoryResponse, ChatResponse } from "@/types/Response";
// import { members as dummyMembers } from "@/utils/data";

// API functions
export const chatBotService = {
  // 채팅 내역 호출
  getChatBotHistory: async (userId: string): Promise<ChatBotHistoryResponse[]> => {
    //   {
    //     "user_id": 1,
    //     "message": "{\n    \"message\" : \"안녕?\"\n}",
    //     "from_user": true,
    //     "timestamp": "2024-08-30T17:46:44.686"
    // },
    // {
    //     "user_id": 1,
    //     "message": "안녕하세요! 😊 무엇을 도와드릴까요? 💸  궁금한 점이 있다면 언제든지 편하게 물어보세요! 최선을 다해 답변해 드릴게요. 👍 \n",
    //     "from_user": false,
    //     "timestamp": "2024-08-30T17:46:44.805"
    // },

    try {
      const response = await axiosInstance.get(`/chat/history/${userId}`);

      return response.data.history;
    } catch (error) {
      console.error("Failed to fetch chat bot history list", error);
      throw error;
    }
  },

  // 채팅 전송
  sendMessage: async (message: string): Promise<ChatResponse> => {
    try {
      const response = await axiosInstance.post(`/chat`, { message: message });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch chat bot response", error);
      throw error;
    }
  },
};
