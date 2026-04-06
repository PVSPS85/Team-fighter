import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInputBar = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about your health reports..."
        style={{
          flex: 1, padding: '14px 20px', borderRadius: '24px', border: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: '1rem', outline: 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = '#0B7B8A'}
        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
      />
      <button 
        type="submit" 
        style={{
          background: '#0B7B8A', color: 'white', border: 'none', borderRadius: '24px', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', cursor: 'pointer'
        }}
      >
        <Send size={18} /> Send
      </button>
    </form>
  );
};

export default ChatInputBar;
