// ChatBox.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatBox = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Connect to the socket server
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    newSocket.on('chatmessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    newSocket.on('userJoined', (name) => {
        console.log(`${name} joined the chat`)
    })

    newSocket.on('userLeft', (name) => {
        console.log(`${name} left the chat`)
    })

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    // Emit a message to the server
    socket.emit('chatMessage', newMessage);

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatBox: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#fff',
    maxWidth: '300px',
  },
  messagesContainer: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  inputContainer: {
    display: 'flex',
    marginTop: '10px',
  },
};

export default ChatBox;
