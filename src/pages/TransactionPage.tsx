import InputField from "@/components/common/InputField";
import shinhan from "@/assets/images/shinhan_log_white.png";

const TransactionPage: React.FC = () => {
  return (
    <div className="h-svh overflow-y-hidden">
      {/* Header */}
      <div className="bg-Button px-4 py-3 text-center text-2xl font-bold flex justify-center">
        <img className=" h-8 " src={shinhan}></img>
        {/* <div className="">신한은행</div> */}
      </div>

      {/* Content */}
      <div
        className="p-4 h-full overflow-y-scroll  text-gray-600"
        style={{
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        {/* deposit */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">입금</div>

          <form className="bg-white p-4 text-sm flex flex-col" action="">
            <InputField label="계좌번호" placeholder="계좌번호를 입력하세요." />
            <InputField label="금액" placeholder="입금할 금액을 입력하세요." />
            <button className="text-Button font-extralight text-right" type="submit">
              입금하기
            </button>
          </form>
        </div>

        {/* Withdrawal */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">출금</div>

          <form className="bg-white p-4 text-sm flex flex-col" action="">
            <InputField label="계좌번호" placeholder="계좌번호를 입력하세요." />
            <InputField label="금액" placeholder="출금할 금액을 입력하세요." />
            <button className="text-Button font-extralight text-right" type="submit">
              출금하기
            </button>
          </form>
        </div>

        {/* Transfer */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">계좌 이체</div>

          <form className="bg-white p-4 text-sm flex flex-col" action="">
            <InputField label="나의 계좌번호" placeholder="출금할 계좌번호를 입력하세요." />
            <InputField label="입금할 계좌번호" placeholder="입금할 계좌번호를 입력하세요." />
            <InputField label="금액" placeholder="이체할 금액을 입력하세요." />
            <button className="text-Button font-extralight text-right" type="submit">
              계좌 이체하기
            </button>
          </form>
        </div>

        {/* Payment */}
        <div className="mb-6 pb-12">
          <div className="text-lg font-bold mb-2">결제</div>

          <form className="bg-white p-4 text-sm flex flex-col" action="">
            <InputField label="계좌번호" placeholder="계좌번호를 입력하세요." />
            <InputField label="결제처" placeholder="결제처를 입력하세요." />
            <InputField label="금액" placeholder="결제할 금액을 입력하세요." />
            <button className="text-Button font-extralight text-right" type="submit">
              결제하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TransactionPage;
