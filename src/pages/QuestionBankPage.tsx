import React, { useState, useEffect } from "react";
import { getQuestions } from "@/services/questionService";
import { Question } from "@/types/Question";
import { ButtonType } from "@/types/AnswerButton";
import QuestionInfo from "@/components/Question/QuestionInfo";
import AnswerButton from "@/components/Question/AnswerButton";
import Explanation from "@/components/Question/Explanation";
import HeaderLogoChatNotify from "@/components/Header/HeaderLogoChatNotify";
import WarningModal from "@/components/Question/WarningModal";
import Loading from "@/components/common/Loading";

const QuestionBankPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"correct" | "incorrect" | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("질문을 불러오는데 실패했습니다", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleGuardianExamClick = () => {
    setIsModalOpen(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const getButtonType = (buttonValue: "correct" | "incorrect"): ButtonType => {
    if (!selectedAnswer) return "default";
    if (currentQuestion.answer === buttonValue && selectedAnswer === buttonValue) return "correct";
    if (currentQuestion.answer !== buttonValue && selectedAnswer === buttonValue)
      return "incorrect";
    return "default";
  };

  const handleAnswerClick = (answer: "correct" | "incorrect") => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  if (loading) return <Loading />;

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogoChatNotify />
      <main className="flex-grow flex flex-col">
        <QuestionInfo
          question={currentQuestion.question}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
        <div className="flex justify-center space-x-4 p-4">
          <AnswerButton
            type={getButtonType("correct")}
            answer="correct"
            onClick={() => handleAnswerClick("correct")}
            disabled={selectedAnswer !== null}
          />
          <AnswerButton
            type={getButtonType("incorrect")}
            answer="incorrect"
            onClick={() => handleAnswerClick("incorrect")}
            disabled={selectedAnswer !== null}
          />
        </div>
        {selectedAnswer && <Explanation explanation={currentQuestion.explanation} />}
      </main>
      <div className="p-4">
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null || isLastQuestion}
          className="w-full bg-Button text-white py-3 rounded-lg disabled:bg-gray-300 mx-auto max-w-md hover:bg-blue-600"
        >
          다음
        </button>
        <button
          onClick={handleGuardianExamClick}
          disabled={!isLastQuestion || selectedAnswer === null}
          className="w-full bg-Button text-white py-3 mt-4 rounded-lg disabled:bg-gray-300 mx-auto max-w-md hover:bg-blue-600"
        >
          시험 보러가기
        </button>
      </div>
      <WarningModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default QuestionBankPage;
