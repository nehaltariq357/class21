import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard({ currentUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    setMessages([
      ...messages,
      { id: Date.now(), sender: currentUser, text: message },
    ]);
    setMessage("");
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome, {currentUser}!</h2>
      <div className="messages-container">
        <h3>Messages</h3>
        <ul className="message-list">
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.sender}:</strong> {msg.text}
              <button onClick={() => handleDeleteMessage(msg.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
