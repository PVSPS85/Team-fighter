import React from 'react';
import './Chatbot.css';
import ChatWindow from './components/ChatWindow';

const Chatbot = () => {
  return (
    <div className="chatbot-page-container">
      <div className="page-header">
        <h1>AI Health Assistant</h1>
        <p>Ask questions and get AI-powered health guidance</p>
      </div>
      
      <div className="chatbot-wrapper">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Chatbot;
