const TransactionPage: React.FC = () => {
  return (
    <div className="h-svh">
      {/* Header */}
      <div className="bg-Button px-4 py-6 text-center text-white text-2xl font-bold">
        결제 테스트 페이지
      </div>

      {/* Content */}
      <div className="p-4 h-full">
        {/* deposit */}
        <div>입금</div>

        {/* Withdrawal */}
        <div>출금</div>

        {/* Transfer */}
        <div>이체</div>

        {/* Payment */}
        <div>결제</div>
      </div>
    </div>
  );
};
export default TransactionPage;
