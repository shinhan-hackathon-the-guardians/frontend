import React, { useState, useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import chatbotProfile from "@/assets/images/chatbot.png";
import HeaderBackNotify from "@/components/Header/HeaderBack";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

function ChatBotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: input,
    };

    setMessages([...messages, userMessage]);

    const botResponse: ChatMessage = {
      sender: "bot",
      text: `${input}`, // 예시 응답
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");

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
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        100
      )}px`;
    }
  }, [input]);

  return (
    <div>
      <HeaderBackNotify />
      <div className="flex flex-col h-screen p-4">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <img src={chatbotProfile} alt="Chatbot" className="w-12 mr-4" />
              )}
              <div
                className={`max-w-xs p-4 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200 text-black text-left"
                } break-words`}
              >
                {message.text}
              </div>
              {message.sender === "user"}
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>
        <div className="sticky bottom-4 flex items-center">
          <div className="flex-1 border border-gray-300 rounded-lg p-2 pr-10 bg-white">
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
              className="w-full focus:outline-none resize-none overflow-hidden border-none"
              style={{ maxHeight: "100px" }} // 일정 높이까지 증가
              placeholder="메시지를 입력하세요"
            />
          </div>
          <button
            onClick={handleSend}
            className="absolute right-1 bottom-2  rounded-full p-1 flex items-end justify-center"
          >
            <FaArrowCircleUp size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
