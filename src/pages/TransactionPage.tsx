import InputField from "@/components/common/InputField";
import shinhan from "@/assets/images/shinhan_log_white.png";
import { useState } from "react";
import { transactionService } from "@/services/transactionService";

interface DepositTransaction {
  accountNumber: string;
  transactionBalance: number;
}

const TransactionPage: React.FC = () => {
  // 사용자 정보 조회
  // useEffect()로 시작할때 텍스트로 넣어놓은 값으로 실행 (0884755843206405)
  const myAccountNumber = "0882302967364715";
  const yourTransferAccountNumber = "0884755843206405";

  // 입금
  const [depositTransaction, setDepositTransactionBalance] = useState({
    account_number: myAccountNumber,
    transaction_balance: 0 as number,
  });

  const handleDepositTransaction = (account_number: string, transaction_balance: number) => {
    setDepositTransactionBalance((prev) => ({
      ...prev,
      account_number: account_number,
      transaction_balance: transaction_balance,
    }));

    console.log(depositTransaction);
  };

  const sendDepositTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Call sendDepositTransaction() method.");
    const depositResponse = await transactionService.deposit(
      depositTransaction.account_number,
      depositTransaction.transaction_balance
    );
    console.log(depositResponse);
    setDepositTransactionBalance({
      account_number: depositTransaction.account_number,
      transaction_balance: 0,
    });
  };

  // 출금
  const [withdrawalTransaction, setWithdrawalTransactionBalance] = useState({
    account_number: myAccountNumber,
    transaction_balance: 0 as number,
  });

  const handleWithdrawalTransaction = (account_number: string, transaction_balance: number) => {
    setWithdrawalTransactionBalance((prev) => ({
      ...prev,
      account_number: account_number,
      transaction_balance: transaction_balance,
    }));

    console.log(withdrawalTransaction);
  };

  const sendWithdrawalTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Call sendWithdrawalTransaction() method.");
    const withdrawalResponse = await transactionService.withdrawal(
      withdrawalTransaction.account_number,
      withdrawalTransaction.transaction_balance
    );
    console.log(withdrawalResponse);
    setWithdrawalTransactionBalance({
      account_number: withdrawalTransaction.account_number,
      transaction_balance: 0,
    });
  };

  // 이체
  const [transferTransaction, setTransferTransactionBalance] = useState({
    withdrawal_account_number: myAccountNumber,
    deposit_account_number: yourTransferAccountNumber,
    transaction_balance: 0 as number,
  });

  const handleTransferTransaction = (
    withdrawal_account_number: string,
    deposit_account_number: string,
    transaction_balance: number
  ) => {
    setTransferTransactionBalance((prev) => ({
      ...prev,
      withdrawal_account_number: withdrawal_account_number,
      deposit_account_number: deposit_account_number,
      transaction_balance: transaction_balance,
    }));

    console.log(transferTransaction);
  };

  const sendTransferTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Call sendTransferTransaction() method.");
    const transferResponse = await transactionService.transfer(
      transferTransaction.withdrawal_account_number,
      transferTransaction.deposit_account_number,
      transferTransaction.transaction_balance
    );
    console.log(transferResponse);
    setTransferTransactionBalance({
      withdrawal_account_number: transferTransaction.withdrawal_account_number,
      deposit_account_number: transferTransaction.deposit_account_number,
      transaction_balance: 0,
    });
  };

  // 결제
  const [paymentTransaction, setPaymentTransactionBalance] = useState({
    account_number: myAccountNumber,
    business_name: "",
    transaction_balance: 0 as number,
  });

  const handlePaymentTransaction = (
    account_number: string,
    business_name: string,
    transaction_balance: number
  ) => {
    setPaymentTransactionBalance((prev) => ({
      ...prev,
      account_number: account_number,
      business_name: business_name,
      transaction_balance: transaction_balance,
    }));

    console.log(paymentTransaction);
  };

  const sendPaymentTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Call sendPaymentTransaction() method.");
    const paymentResponse = await transactionService.payment(
      paymentTransaction.account_number,
      paymentTransaction.business_name,
      paymentTransaction.transaction_balance
    );
    console.log(paymentResponse);
    setPaymentTransactionBalance({
      account_number: paymentTransaction.account_number,
      business_name: "",
      transaction_balance: 0,
    });
  };

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
        {/* userinfo */}
        <div className="mb-6 bg-white p-6 rounded-xl shadow-md  ">
          <div className="text-lg font-bold mb-2 text-gray-900">김신한</div>
          <div className="flex justify-between">
            <div className="text-sm font-bold mb-2">계좌번호: </div>
            <div className="text-sm">
              <span>신한 </span>
              {myAccountNumber}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-bold mb-2">잔액 : </div>
            <div className="text-sm">50,000원</div>
          </div>
        </div>

        {/* deposit */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">입금</div>

          <form className="bg-white p-4 text-sm flex flex-col shadow-md rounded" action="">
            <InputField
              label="계좌번호"
              placeholder="계좌번호를 입력하세요."
              value={depositTransaction.account_number}
              onChange={(value: string) =>
                handleDepositTransaction(value, depositTransaction.transaction_balance)
              }
            />
            <InputField
              label="금액"
              placeholder="입금할 금액을 입력하세요."
              value={depositTransaction.transaction_balance as number}
              onChange={(value: string) =>
                handleDepositTransaction(depositTransaction.account_number, parseFloat(value))
              }
            />
            <div className="text-right">
              <button
                className="text-Button font-extralight text-right hover:font-medium "
                type="submit"
                onClick={sendDepositTransaction}
              >
                입금하기
              </button>
            </div>
          </form>
        </div>

        {/* Withdrawal */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">출금</div>

          <form className="bg-white p-4 text-sm flex flex-col shadow-md rounded" action="">
            <InputField
              label="계좌번호"
              placeholder="계좌번호를 입력하세요."
              value={withdrawalTransaction.account_number}
              onChange={(value: string) =>
                handleWithdrawalTransaction(value, withdrawalTransaction.transaction_balance)
              }
            />
            <InputField
              label="금액"
              placeholder="출금할 금액을 입력하세요."
              value={withdrawalTransaction.transaction_balance as number}
              onChange={(value: string) =>
                handleWithdrawalTransaction(withdrawalTransaction.account_number, parseFloat(value))
              }
            />
            <div className="text-right">
              <button
                className="text-Button font-extralight text-right hover:font-medium"
                type="submit"
                onClick={sendWithdrawalTransaction}
              >
                출금하기
              </button>
            </div>
          </form>
        </div>

        {/* Transfer */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2">계좌 이체</div>

          <form className="bg-white p-4 text-sm flex flex-col shadow-md rounded" action="">
            <InputField
              label="나의 계좌번호"
              placeholder="출금할 계좌번호를 입력하세요."
              value={transferTransaction.withdrawal_account_number}
              onChange={(value: string) =>
                handleTransferTransaction(
                  value,
                  transferTransaction.deposit_account_number,
                  transferTransaction.transaction_balance
                )
              }
            />
            <InputField
              label="입금할 계좌번호"
              placeholder="입금할 계좌번호를 입력하세요."
              value={transferTransaction.deposit_account_number}
              onChange={(value: string) =>
                handleTransferTransaction(
                  transferTransaction.withdrawal_account_number,
                  value,
                  transferTransaction.transaction_balance
                )
              }
            />
            <InputField
              label="금액"
              placeholder="이체할 금액을 입력하세요."
              value={transferTransaction.transaction_balance as number}
              onChange={(value: string) =>
                handleTransferTransaction(
                  transferTransaction.withdrawal_account_number,
                  transferTransaction.deposit_account_number,
                  parseFloat(value)
                )
              }
            />
            <div className="text-right">
              <button
                className="text-Button font-extralight text-right hover:font-medium"
                type="submit"
                onClick={sendTransferTransaction}
              >
                계좌 이체하기
              </button>
            </div>
          </form>
        </div>

        {/* Payment */}
        <div className="mb-6 pb-12">
          <div className="text-lg font-bold mb-2">결제</div>

          <form className="bg-white p-4 text-sm flex flex-col shadow-md rounded" action="">
            <InputField
              label="계좌번호"
              placeholder="계좌번호를 입력하세요."
              value={paymentTransaction.account_number}
              onChange={(value: string) =>
                handlePaymentTransaction(
                  value,
                  paymentTransaction.business_name,
                  paymentTransaction.transaction_balance
                )
              }
            />
            <InputField
              label="결제처"
              placeholder="결제처를 입력하세요."
              value={paymentTransaction.business_name}
              onChange={(value: string) =>
                handlePaymentTransaction(
                  paymentTransaction.account_number,
                  value,
                  paymentTransaction.transaction_balance
                )
              }
            />
            <InputField
              label="금액"
              placeholder="결제할 금액을 입력하세요."
              value={paymentTransaction.transaction_balance as number}
              onChange={(value: string) =>
                handlePaymentTransaction(
                  paymentTransaction.account_number,
                  paymentTransaction.business_name,
                  parseFloat(value)
                )
              }
            />
            <div className="text-right">
              <button
                className="text-Button font-extralight text-right hover:font-medium"
                type="submit"
                onClick={sendPaymentTransaction}
              >
                결제하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TransactionPage;
