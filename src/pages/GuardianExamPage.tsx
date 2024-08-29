import React, { useState, useEffect, useRef } from "react";
import { getQuestions } from "@/services/questionService";
import { Question } from "@/types/Question";
import { ButtonType } from "@/types/AnswerButton";
import { QUESTION_TIME } from "@/constant/common";
import QuestionInfo from "@/components/Question/QuestionInfo";
import AnswerButton from "@/components/Question/AnswerButton";
import Explanation from "@/components/Question/Explanation";
import HeaderLogoChatNotify from "@/components/Header/HeaderLogoChatNotify";
import ProgressBar from "@/components/Question/ProgressBar";
import ResultModal from "@/components/Question/ResultModal";
import Loading from "@/components/common/Loading";

const GuardianExamPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"correct" | "incorrect" | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIME);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    if (questions.length > 0) {
      startTimer();
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, questions]);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(QUESTION_TIME);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleTimeUp = () => {
    if (questions[currentIndex]) {
      setSelectedAnswer(questions[currentIndex].answer);
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 < questions.length) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const getButtonType = (buttonValue: "correct" | "incorrect"): ButtonType => {
    if (!showResult || !questions[currentIndex]) return "default";
    if (selectedAnswer === questions[currentIndex].answer && selectedAnswer === buttonValue)
      return "correct";
    if (selectedAnswer === buttonValue) return "incorrect";
    return "default";
  };

  const handleAnswerClick = (answer: "correct" | "incorrect") => {
    if (!showResult) {
      setSelectedAnswer(answer);
      setShowResult(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (answer === currentQuestion.answer) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const handleShowResults = () => {
    setShowModal(true);
  };

  if (loading) return <Loading />;

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
            type={getButtonType("correct")}
            answer="correct"
            onClick={() => handleAnswerClick("correct")}
            disabled={showResult}
          />
          <AnswerButton
            type={getButtonType("incorrect")}
            answer="incorrect"
            onClick={() => handleAnswerClick("incorrect")}
            disabled={showResult}
          />
        </div>
        {showResult && <Explanation explanation={currentQuestion.explanation} />}
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
          onClick={handleShowResults}
          disabled={!showResult || !isLastQuestion}
          className="w-full bg-grey text-white py-3 mt-4 rounded-lg disabled:bg-gray-300 mx-auto max-w-md"
        >
          결과 보기
        </button>
      </div>
      <ResultModal
        isOpen={showModal}
        correctAnswers={correctAnswers}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default GuardianExamPage;
