import React, { useState, useEffect } from "react";
import { getQuestions } from "@/services/questionService";
import { Question } from "@/types/Question";
import QuestionInfo from "@/components/Question/QuestionInfo";
import AnswerButton from "@/components/Question/AnswerButton";
import Explanation from "@/components/Question/Explanation";

const QuestionBankPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<
    "correct" | "incorrect" | null
  >(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to load questions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handleAnswerClick = (answer: "correct" | "incorrect") => {
    setSelectedAnswer(answer);
  };

  if (loading) return <p>Loading...</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <h1>Question Bank</h1>
      <QuestionInfo question={currentQuestion.question} />
      <AnswerButton
        answer="correct"
        isSelected={selectedAnswer === "correct"}
        onClick={() => handleAnswerClick("correct")}
      />
      <AnswerButton
        answer="incorrect"
        isSelected={selectedAnswer === "incorrect"}
        onClick={() => handleAnswerClick("incorrect")}
      />
      <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
        Next Question
      </button>
      {selectedAnswer && (
        <div
          style={{
            border: `2px solid ${
              selectedAnswer === currentQuestion.answer ? "green" : "red"
            }`,
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <p>
            {selectedAnswer === currentQuestion.answer
              ? "Correct!"
              : "Incorrect!"}
          </p>
          <Explanation explanation={currentQuestion.explanation} />
        </div>
      )}
    </div>
  );
};

export default QuestionBankPage;
