import axiosInstance from './axiosInstance';
import { Question } from "@/types/Question";
import { financeQuestions as dummyFinanceQuestions } from "@/utils/data";

const getQuestions = async (): Promise<Question[]> => {
    return dummyFinanceQuestions;
    try {
        const response = await axiosInstance.get('/question');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch question bank', error);
        throw error;
    }
};


export { getQuestions };
