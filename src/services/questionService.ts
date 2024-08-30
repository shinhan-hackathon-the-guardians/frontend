import axiosInstance from "./axiosInstance";
import { Question } from "@/types/Question";
import { financeQuestions as dummyFinanceQuestions } from "@/utils/data";

// 가디언 시험 파트
const getQuestions = async (): Promise<Question[]> => {
  return dummyFinanceQuestions;
  try {
    const response = await axiosInstance.get("/question");
    return response.data;
  } catch (error) {
    console.error("Failed to get question", error);
    throw error;
  }
};

const postQuestionComplete = async (isPassed: boolean): Promise<void> => {
  try {
    await axiosInstance.post<Question[]>("/question/practice", { isPassed });
  } catch (error) {
    console.error("Failed to post question result:", error);
    throw error;
  }
};

// 문제은행 파트
const getPractice = async (): Promise<Question[]> => {
  return dummyFinanceQuestions;
  try {
    const response = await axiosInstance.get("/question");
    return response.data;
  } catch (error) {
    console.error("Failed to get practice", error);
    throw error;
  }
};

export { getQuestions, postQuestionComplete, getPractice };
