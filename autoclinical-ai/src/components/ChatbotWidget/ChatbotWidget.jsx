import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-widget-container">
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-popup-header">
            <span>AI Assistant</span>
            <button onClick={() => setIsOpen(false)}><X size={16} /></button>
          </div>
          <div className="chatbot-popup-body">
            <p className="bot-msg">Hello! How can I help you analyze your data today?</p>
          </div>
          <input type="text" placeholder="Type a message..." className="chatbot-popup-input" />
        </div>
      )}
      <button className="chatbot-fab" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
