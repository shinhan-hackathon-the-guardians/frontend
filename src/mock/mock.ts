// mock.ts
import MockAdapter from "axios-mock-adapter";
import axiosInstance from "../services/axiosInstance";

// 모킹 어댑터 설정
const mock = new MockAdapter(axiosInstance);

// Mock 데이터
const approvalMockData = {
  approval_id: 1,
  family_id: 101,
  family_name: "테스트 가족",
  family_description: "이것은 테스트 가족입니다.",
};

const notificationsMockData = [
  {
    notification_id: 1,
    sender_name: "홍길동",
    transaction_time: "2024-08-31 12:34:56",
    transaction_balance: 100000,
    transaction_type: "DEPOSIT",
    account_number: "123-456-789",
  },
  {
    notification_id: 2,
    sender_name: "이몽룡",
    transaction_time: "2024-08-30 15:00:00",
    transaction_balance: 50000,
    transaction_type: "WITHDRAWAL",
    account_number: "987-654-321",
  },
];

// GET /approval 요청에 대한 Mock 응답
mock.onGet("/approval").reply(200, approvalMockData);

// GET /notification/unanswered 요청에 대한 Mock 응답
mock.onGet("/notification/unanswered").reply(200, notificationsMockData);

// POST /approval/reply 요청에 대한 Mock 응답
mock
  .onPost("/approval/reply")
  .reply(200, { message: "Approval response sent" });

// POST /notification/reply 요청에 대한 Mock 응답
mock
  .onPost("/notification/reply")
  .reply(200, { message: "Notification response sent" });

export default mock;
