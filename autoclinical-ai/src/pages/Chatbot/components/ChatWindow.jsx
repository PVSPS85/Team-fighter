import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import SuggestedChips from './SuggestedChips';
import ChatInputBar from './ChatInputBar';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the AI Health Assistant! I can explain reports, suggest precautions, and answer health questions. What would you like to know?", isBot: true }
  ]);

  const handleSend = (text) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), text, isBot: false }]);
    
    // Simulate AI response for Hackathon demo
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "I'm analyzing your clinical data now. As an AI assistant, I can review the parameters you just mentioned.", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <div className="messages-area">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg.text} isBot={msg.isBot} />
        ))}
      </div>
      
      <div className="input-area-wrapper">
        <SuggestedChips onSelect={handleSend} />
        <ChatInputBar onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
