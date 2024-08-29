import React, { useState } from "react";
import chatbotProfile from "@/assets/images/chatbot.png";
import userProfile from "@/assets/images/default.png";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

function ChatBotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: ChatMessage = {
      sender: "user",
      text: input,
    };

    setMessages([...messages, userMessage]);

    // 여기에 실제 챗봇 응답 로직이 들어가야 합니다.
    const botResponse: ChatMessage = {
      sender: "bot",
      text: `${input}`, // 예시 응답
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div>
      <HeaderBackChatNotify />
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
                } overflow-y-auto max-h-36 break-words`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <img
                  src={userProfile}
                  alt="User"
                  className="w-12 h-12 rounded-full ml-4"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-r-lg p-2"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
