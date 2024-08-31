interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onConfirm: () => void;
  name: string;
  accountInfo: string;
  amount: string;
}

function TransferFailureModal({
  isOpen,
  onClose,
  amount,
}: NotificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-gray">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm text-center z-50">
        <h2 className="text-md mb-2 text-rose-600 font-bold">계좌 이체 실패</h2>
        <p className="text-md font-bold text-rose-600 my-2">
          {parseInt(amount, 10).toLocaleString()}원
          <span className="text-gray-800 font-normal ">
            {" "}
            계좌 이체에 실패하였습니다.
          </span>
        </p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onClose}
            className="bg-Button  text-white px-4 py-2 rounded w-24 font-sm "
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferFailureModal;
