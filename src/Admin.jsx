import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import { FaWhatsapp } from 'react-icons/fa';

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [messageType, setMessageType] = useState('sms'); // 'sms' or 'whatsapp'

  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users');
      const data = await response.json();
      if (response.ok) {
        setUsers(data.users);
      }
    } catch (error) {
      showAlert('error', 'Failed to fetch users');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'saravedi') {
      setIsAuthenticated(true);
      showAlert('success', 'Login successful');
    } else {
      showAlert('error', 'Invalid password');
    }
  };

  const handleSendAlert = async () => {
    if (!message.trim()) {
      showAlert('error', 'Please enter a message');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/admin/send-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message,
          messageType 
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        showAlert('success', data.message);
        if (data.details) {
          console.log('Delivery details:', data.details);
        }
        setMessage('');
      } else {
        showAlert('error', data.message);
      }
    } catch (error) {
      showAlert('error', 'Failed to send alert');
    }
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="admin-card">
          <h2>Admin Login</h2>
          {alert.show && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </div>

      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}

      <div className="admin-content">
        <div className="alert-section">
          <h2>Send Disaster Alert</h2>
          <div className="message-type-selector">
            <button 
              className={`type-btn ${messageType === 'sms' ? 'active' : ''}`}
              onClick={() => setMessageType('sms')}
            >
              SMS
            </button>
            <button 
              className={`type-btn ${messageType === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setMessageType('whatsapp')}
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Enter emergency message for ${messageType === 'whatsapp' ? 'WhatsApp' : 'SMS'}...`}
            rows="4"
          />
          <button onClick={handleSendAlert} className="send-button">
            {messageType === 'whatsapp' ? (
              <>
                <FaWhatsapp /> Send via WhatsApp
              </>
            ) : (
              'Send SMS to All Users'
            )}
          </button>
        </div>

        <div className="users-section">
          <h2>Registered Users ({users.length})</h2>
          <div className="users-list">
            {users.map((user, index) => (
              <div key={index} className="user-card">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 