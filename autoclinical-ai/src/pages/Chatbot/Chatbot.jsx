import { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    if (!text) return;

    setMessages((prev) => [...prev, { text, user: true }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "AI response coming soon...", user: false },
      ]);
    }, 800);
  };

  return (
    <div className="chat-container">
      <h1>AI Assistant</h1>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.user ? "user" : "bot"}>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        placeholder="Ask something..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
