import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import chatbotProfile from "@/assets/images/chatbot.png";
import HeaderBackNotify from "@/components/Header/HeaderBack";
import { chatBotService } from "@/services/chatBotService";
import { ChatBotHistoryResponse } from "@/types/Response";
import ReactMackDown from "react-markdown";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

function ChatBotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 페이지에 진입할 때, 한 번 호출하여 채팅 내역을 조회
    const getChatHistory = async () => {
      const userId = "1";
      try {
        const data = await chatBotService.getChatBotHistory(userId);
        const history = transformToChatMessage(data);
        setMessages(history);
      } catch (error) {
        console.log("Failed to load chat history", error);
      }
    };

    getChatHistory(); // 호출 1번
  }, []);

  // 받은 채팅 응답 매핑
  function transformToChatMessage(history: ChatBotHistoryResponse[]): ChatMessage[] {
    return history.map((item) => ({
      sender: item.from_user === true ? "user" : "bot",
      text: item.message, // 봇 메시지는 그대로 사용
    }));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: input,
    };

    // 채팅 전송

    setMessages([...messages, userMessage]);
    const inputMessage = userMessage.text;
    setInput("");
    const messageResponse = await chatBotService.sendMessage(inputMessage);

    const botResponse: ChatMessage = {
      sender: "bot",
      text: `${
        messageResponse.message !== null
          ? messageResponse.message
          : "오류가 발생했어요, 다시 전송해주세요."
      }`, // 예시 응답
    };

    setMessages([...messages, userMessage, botResponse]);

    // 메시지 전송 후 입력 칸 높이를 초기화
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
    }
  }, [input]);

  return (
    <div className="flex flex-col h-screen">
      <HeaderBackNotify />
      <div className="flex flex-col flex-1 p-4 overflow-y-hidden">
        <div
          className="flex-1 overflow-y-scroll mb-4"
          style={{
            scrollbarWidth: "none", // Firefox
            scrollbarColor: "#888 #f1f1f1", // Firefox
            WebkitOverflowScrolling: "touch", // Smooth scrolling for iOS
          }}
        >
          <div className="bg-gray-200 p-6 mb-4">AI 챗봇 가디에게 궁금한 점을 질문해주세요!</div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex-1 flex items-start mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" ? (
                <div className="flex">
                  {/* 가디 이미지 */}
                  <div>
                    <img src={chatbotProfile} alt="Chatbot" className="w-10 mt-2 mr-4" />
                    <p className="font-bold text-center mt-1 mr-4 text-gray-700">가디</p>
                  </div>
                  {/* 채팅 */}
                  <div
                    className={`max-w-60 py-3 px-4 rounded-lg bg-gray-200 text-black text-left
                     break-words`}
                  >
                    <ReactMackDown>{message.text}</ReactMackDown>
                  </div>
                </div>
              ) : (
                <div>
                  {/* 채팅 */}
                  <div
                    className={`max-w-60 py-3 px-4 rounded-lg bg-blue-500 text-white text-left break-words`}
                  >
                    <ReactMackDown>{message.text}</ReactMackDown>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>
      </div>
      <div className="sticky bottom-4 flex items-center m-4">
        <div className="flex-1 flex flex-col justify-center border border-gray-300 rounded-lg p-2 pr-10 bg-white">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={1}
            className="w-full focus:outline-none resize-none overflow-hidden border-none "
            style={{ maxHeight: "100px" }} // 일정 높이까지 증가
            placeholder="메시지를 입력하세요"
          />
          <button
            onClick={handleSend}
            className="absolute right-1 bottom-1 rounded-full p-1 flex items-end justify-center"
          >
            <FaArrowCircleUp className="text-Button" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
