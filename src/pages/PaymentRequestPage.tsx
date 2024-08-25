import HeaderBackSetting from "@/components/Header/HeaderBackSetting";
import UnreadSticker from "@/components/Notification/UnreadSticker";

function PaymentRequestPage() {
  return (
    <div>
      <HeaderBackSetting />
      <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center">
        {/* 좌측 상단 이름 표시 */}
        <div className="w-full flex justify-start p-6">
          <h1 className="text-xl font-bold">ooo님의 요청내역</h1>
        </div>

        {/* 내역 목록 컴포넌트 */}
        <div className="relative w-full max-w-xs bg-white shadow-md rounded-lg p-6">
          {/* 컴포넌트 내부 - 계좌번호, 결제 요청 금액 */}
          <UnreadSticker />
          <div className="flex flex-col gap-4">
            <div className="flex justify-start">
              <span className="text-sm text-gray-900">신한 123-456-78910</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl text-gray-900">1,000,000원</span>
              <span className="text-sm text-gray-900">잔액 12,345원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequestPage;
