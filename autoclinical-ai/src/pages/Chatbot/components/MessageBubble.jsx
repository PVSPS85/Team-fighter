import React from 'react';
import { Bot, User } from 'lucide-react';

const MessageBubble = ({ message, isBot }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      alignSelf: isBot ? 'flex-start' : 'flex-end',
      maxWidth: '80%',
      flexDirection: isBot ? 'row' : 'row-reverse'
    }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        background: isBot ? '#4F46E5' : '#0B7B8A', color: 'white'
      }}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      
      <div style={{
        background: isBot ? '#F8FAFC' : '#0B7B8A',
        color: isBot ? '#1E293B' : 'white',
        padding: '12px 16px',
        borderRadius: isBot ? '0 16px 16px 16px' : '16px 0 16px 16px',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        border: isBot ? '1px solid #E2E8F0' : 'none'
      }}>
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
