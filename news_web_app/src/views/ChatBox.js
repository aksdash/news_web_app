import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { baseUrl } from '../util/api.js';

const ChatBox = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const newSocket = io(baseUrl); // Replace with your server URL
    setSocket(newSocket);

    return () => {
     // newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (newMessage) => {
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
      });

    }
  }, [socket]);

  const handleJoinChat = () => {
    if (username.trim() !== '') {
      setIsJoined(true);
      socket.emit('join', username);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', { username, message });
      setMessage('');
    }
  };

  const handleCloseChat = () => {
    setIsJoined(false);
    setUsername('');
    
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '300px',
        height: '60%',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        overflowY: 'auto',
      }}
    >
      {!isJoined ? (
        <div style={{ padding: '10px' }}>
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleJoinChat}>Join</button>
        </div>
      ) : (
        <div style={{ padding: '10px', height: '100%' }}>
          <div style={{ height: '80%', overflowY: 'auto' }}>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <strong>{chat.username}:</strong> {chat.message}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <button onClick={handleCloseChat} style={{ marginTop: '10px' }}>
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
