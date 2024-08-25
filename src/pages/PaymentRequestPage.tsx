import HeaderBackSetting from "@/components/Header/HeaderBackSetting";

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
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          {/* 컴포넌트 내부 - 계좌번호, 결제 요청 금액 */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">
                계좌번호:
              </span>
              <span className="text-sm text-gray-900">1234-5678-9012</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">
                결제 요청 금액:
              </span>
              <span className="text-sm text-gray-900">1,000,000원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequestPage;
