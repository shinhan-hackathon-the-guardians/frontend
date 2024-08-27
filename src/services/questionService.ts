import { Question } from "@/types/Question";
import axiosInstance from './axiosInstance';

const getQuestions = async (): Promise<Question[]> => {
    try {
        const response = await axiosInstance.get('/question');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch question bank', error);
        throw error;
    }
};


export { getQuestions };
