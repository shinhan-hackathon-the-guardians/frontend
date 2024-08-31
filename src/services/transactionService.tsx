import axiosInstance from "./axiosInstance";

export const transactionService = {
  // 조회
  balance: async (account_number: string): Promise<any> => {
    try {
      const response = await axiosInstance.post(`/transactions/balance`, {
        account_number: account_number,
      });

      // console.log(response);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log("Failed to get balance request.");
      throw error;
    }
  },

  // 입금
  deposit: async (account_number: string, transaction_balance: number): Promise<any> => {
    try {
      const response = await axiosInstance.post(`/transactions/deposit`, {
        account_number: account_number,
        transaction_balance: transaction_balance,
      });
      return response;
    } catch (error) {
      console.error("Failed to deposit request.", error);
      throw error;
    }
  },

  withdrawal: async (account_number: string, transaction_balance: number): Promise<any> => {
    console.log(transaction_balance);
    try {
      const response = await axiosInstance.post(`/transactions/withdrawal`, {
        account_number: account_number,
        transaction_balance: transaction_balance,
      });
      return response;
    } catch (error) {
      console.error("Failed to withdrawal request.", error);
      throw error;
    }
  },

  transfer: async (
    withdrawal_account_number: string,
    deposit_account_number: string,
    transaction_balance: number
  ): Promise<any> => {
    console.log(transaction_balance);
    try {
      const response = await axiosInstance.post(`/transactions/transfer`, {
        withdrawal_account_number: withdrawal_account_number,
        deposit_account_number: deposit_account_number,
        transaction_balance: transaction_balance,
      });
      return response;
    } catch (error) {
      console.error("Failed to transfer request.", error);
      throw error;
    }
  },

  payment: async (
    account_number: string,
    business_name: string,
    transaction_balance: number
  ): Promise<any> => {
    console.log(transaction_balance);
    try {
      const response = await axiosInstance.post(`/transactions/payment`, {
        account_number: account_number,
        business_name: business_name,
        transaction_balance: transaction_balance,
      });
      return response;
    } catch (error) {
      console.error("Failed to payment request.", error);
      throw error;
    }
  },
};
