interface PaymentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
  accountInfo: string;
  amount: number;
}

function PaymentRequestModal({
  isOpen,
  onClose,
  onConfirm,
  name,
  accountInfo,
  amount,
}: PaymentRequestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center z-50">
        <h2 className="text-md mb-2">
          서포터 <span className="text-blue-600 font-bold">{name}</span>님의
        </h2>
        <p className="text-lg font-medium text-gray-800">{accountInfo}</p>
        <p className="text-2xl font-bold text-blue-600 my-2">
          {amount.toLocaleString()}원
        </p>
        <p className="text-gray-900">계좌 이체 수락하시겠습니까?</p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onConfirm}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-24 font-medium"
          >
            예
          </button>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded w-24 font-medium"
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequestModal;
