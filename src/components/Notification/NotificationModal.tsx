interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onConfirm: () => void;
  name: string;
  accountInfo: string;
  amount: string;
}

function NotificationModal({
  isOpen,
  onClose,
  // onConfirm,
  name,
  accountInfo,
  amount,
}: NotificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center z-50">
        <h2 className="text-md mb-2">
          서포터 <span className="text-blue-600 font-bold">{name}</span>님의
        </h2>
        <p className="text-lg font-medium text-gray-800">{accountInfo}</p>
        <p className="text-xl font-bold text-blue-600 my-2">
          <span className="text-sm text-black">결제 시도 금액 </span>
          {parseInt(amount, 10).toLocaleString()}원{" "}
          <span className="text-sm text-black">으로</span>
        </p>
        <p className="text-gray-900"> 결제 한도를 초과하였습니다.</p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-24 font-medium"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationModal;
