import axiosInstance from "./axiosInstance";
import { Question } from "@/types/Question";
// import { financeQuestions as dummyFinanceQuestions } from "@/utils/data";

// 가디언 시험 파트
const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await axiosInstance.get("/question");
    return response.data.questions;
  } catch (error) {
    console.error("Failed to get question", error);
    throw error;
  }
};

const postQuestionComplete = async (pass: boolean): Promise<void> => {
  try {
    await axiosInstance.post("/question/complete", { pass });
  } catch (error) {
    console.error("Failed to post question result:", error);
    throw error;
  }
};

// 문제은행 파트
const getPractice = async (): Promise<Question[]> => {
  try {
    const response = await axiosInstance.get("/question/practice");
    return response.data.questions;
  } catch (error) {
    console.error("Failed to get practice", error);
    throw error;
  }
};

export { getQuestions, postQuestionComplete, getPractice };
