import UnreadSticker from "@/components/Notification/UnreadSticker";
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
  return (
    <div>
      <HeaderBackChatNotify />
      <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center">
        <div className="w-full flex justify-start p-6">
          <h1 className="flex items-end text-xl font-bold">
            <div className="text-2xl font-bold">김신한</div> 그룹 가입 신청 내역
          </h1>
        </div>

        {paymentRequests.map((request, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs bg-white shadow-md rounded-lg p-6 mb-6 cursor-pointer"
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
      </div>
    </div>
  );
}

export default PaymentRequestPage;
