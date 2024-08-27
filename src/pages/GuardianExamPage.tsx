import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "@/services/questionService";
import { Question } from "@/types/Question";
import { QUESTION_TIME } from "@/constant/common";
import QuestionInfo from "@/components/Question/QuestionInfo";
import AnswerButton from "@/components/Question/AnswerButton";
import Explanation from "@/components/Question/Explanation";
import HeaderLogoChatNotify from "@/components/Header/HeaderLogoChatNotify";
import ProgressBar from "@/components/Question/ProgressBar";

const GuardianExamPage: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<
    "correct" | "incorrect" | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIME);
  const [showResult, setShowResult] = useState<boolean>(false);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setSelectedAnswer("incorrect");
    }
    setShowResult(true);
    setTimeout(handleNextQuestion, 3000); // 3초 후 다음 문제로 이동
  };

  const handleGoToExam = () => {
    navigate("/guardianExam");
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 < questions.length) {
        setTimeLeft(QUESTION_TIME);
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handleAnswerClick = (answer: "correct" | "incorrect") => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setShowResult(true);
      setTimeout(handleNextQuestion, 3000); // 3초 후 다음 문제로 이동
    }
  };

  if (loading) return <p className="text-center">로딩 중...</p>;

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogoChatNotify />
      <main className="flex-grow flex flex-col">
        <ProgressBar timeLeft={timeLeft} totalTime={QUESTION_TIME} />
        <QuestionInfo
          question={currentQuestion.question}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
        <div className="flex justify-center space-x-4 p-4">
          <AnswerButton
            answer="correct"
            isSelected={selectedAnswer === "correct"}
            isCorrect={currentQuestion.answer === "correct"}
            showResult={showResult}
            onClick={() => handleAnswerClick("correct")}
          />
          <AnswerButton
            answer="incorrect"
            isSelected={selectedAnswer === "incorrect"}
            isCorrect={currentQuestion.answer === "incorrect"}
            showResult={showResult}
            onClick={() => handleAnswerClick("incorrect")}
          />
        </div>
        {showResult && (
          <Explanation explanation={currentQuestion.explanation} />
        )}
      </main>
      <div className="p-4">
        <button
          onClick={handleNextQuestion}
          disabled={!showResult || isLastQuestion}
          className="w-full bg-Button text-white py-3 rounded-lg disabled:bg-blue-300 mx-auto max-w-md"
        >
          다음
        </button>
        <button
          onClick={handleGoToExam}
          disabled={!isLastQuestion || !showResult}
          className="w-full bg-grey text-white py-3 mt-4 rounded-lg disabled:bg-gray-300 mx-auto max-w-md"
        >
          시험 보러가기
        </button>
      </div>
    </div>
  );
};

export default GuardianExamPage;
