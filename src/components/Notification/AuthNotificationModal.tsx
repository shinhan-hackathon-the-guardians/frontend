interface AuthNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  accountInfo: string;
  amount: string;
}

function AuthNotificationModal({
  isOpen,
  onClose,
  name,
  accountInfo,
  amount,
}: AuthNotificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-start z-50 animate-slide-down">
        <p className="text-lg font-medium text-gray-800">
          {accountInfo} {parseInt(amount, 10).toLocaleString()}원
        </p>
        <h2 className="text-md mb-2">
          인증코드{" "}
          <span className="text-xl text-blue-600 font-bold">{name}</span>
        </h2>
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

export default AuthNotificationModal;
