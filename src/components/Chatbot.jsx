import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chatbot.css';
import { RiRobot3Fill, RiMessage2Fill } from "react-icons/ri";
import { IoMdRefresh } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Disaster Management Assistant. How can I help you today?\n\nYou can ask me about:\n1. Emergency services\n2. Disaster information\n3. Website navigation\n4. Safety tips\n5. Contact information", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const [adminClickCount, setAdminClickCount] = useState(0);
  const [showAdminLink, setShowAdminLink] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);
    const response = getBotResponse(inputMessage.toLowerCase());
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInputMessage('');
  };

  const getBotResponse = (message) => {
    // Website navigation
    if (message.includes('website') || message.includes('navigate') || message.includes('find')) {
      return "Here's how to navigate our website:\n" +
        "• Home - Main dashboard and updates\n" +
        "• Emergency - Report emergencies and get help\n" +
        "• Live Track - Monitor weather and disasters\n" +
        "• About - Learn about our services\n" +
        "• Profile - Manage your account\n\n" +
        "Which section would you like to know more about?";
    }

    // Profile and account
    if (message.includes('profile') || message.includes('account') || message.includes('login')) {
      return "To manage your account:\n" +
        "1. Click Login/Signup in the top menu\n" +
        "2. Create an account or sign in\n" +
        "3. Access your profile to update information\n" +
        "4. Enable notifications for alerts\n\n" +
        "Need help with registration?";
    }

    // Emergency reporting
    if (message.includes('report') || message.includes('emergency')) {
      return "To report an emergency:\n" +
        "1. Click the Emergency button\n" +
        "2. Select the type of emergency\n" +
        "3. Fill in the details\n" +
        "4. Submit the report\n\n" +
        "For immediate assistance, call: 112";
    }

    // Disaster types
    if (message.includes('flood')) {
      return "Flood Safety Guidelines:\n" +
        "1. Move to higher ground immediately\n" +
        "2. Avoid walking through moving water\n" +
        "3. Listen to emergency broadcasts\n" +
        "4. Keep emergency supplies ready\n" +
        "5. Follow evacuation orders\n\n" +
        "Need real-time flood updates? Check our Live Track page.";
    }

    if (message.includes('earthquake')) {
      return "Earthquake Safety Protocol:\n" +
        "1. Drop, Cover, and Hold On\n" +
        "2. Stay away from windows and exterior walls\n" +
        "3. If inside, stay inside\n" +
        "4. If outside, move to an open area\n" +
        "5. Be prepared for aftershocks\n\n" +
        "Want to learn more about earthquake preparedness?";
    }

    if (message.includes('fire')) {
      return "Fire Emergency Steps:\n" +
        "1. Call fire emergency (101)\n" +
        "2. Use fire extinguisher if safe\n" +
        "3. Evacuate immediately\n" +
        "4. Stay low to avoid smoke\n" +
        "5. Close doors behind you\n\n" +
        "Need fire department contacts?";
    }

    // Live tracking
    if (message.includes('track') || message.includes('weather') || message.includes('monitor')) {
      return "Our Live Track feature provides:\n" +
        "• Real-time weather updates\n" +
        "• Disaster tracking\n" +
        "• Emergency service locations\n" +
        "• Evacuation routes\n\n" +
        "Visit the Live Track page to access these features.";
    }

    // Contact information
    if (message.includes('contact') || message.includes('number') || message.includes('phone')) {
      return "Emergency Contact Numbers:\n" +
        "• General Emergency: 112\n" +
        "• Police: 100\n" +
        "• Fire: 101\n" +
        "• Ambulance: 108\n" +
        "• Disaster Management: 108\n\n" +
        "Save these numbers for quick access.";
    }

    // Safety tips
    if (message.includes('safety') || message.includes('prepare') || message.includes('kit')) {
      return "Essential Safety Tips:\n" +
        "1. Create an Emergency Kit:\n" +
        "   • First aid supplies\n" +
        "   • Water and non-perishable food\n" +
        "   • Flashlights and batteries\n" +
        "   • Important documents\n\n" +
        "2. Make a Family Plan:\n" +
        "   • Meeting points\n" +
        "   • Emergency contacts\n" +
        "   • Evacuation routes\n\n" +
        "Want specific preparation tips?";
    }

    // Help
    if (message.includes('help')) {
      return "I can help you with:\n" +
        "1. Emergency procedures\n" +
        "2. Disaster information\n" +
        "3. Safety guidelines\n" +
        "4. Website navigation\n" +
        "5. Contact information\n\n" +
        "What would you like to know more about?";
    }

    // Default response
    return "I'm here to help! You can ask about:\n" +
      "• Emergency procedures\n" +
      "• Disaster information\n" +
      "• Website features\n" +
      "• Safety guidelines\n" +
      "• Contact numbers\n\n" +
      "Please specify your question.";
  };

  const handleBack = () => {
    setAdminClickCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowAdminLink(true);
        setTimeout(() => {
          setShowAdminLink(false);
          setAdminClickCount(0);
        }, 3000);
      }
      return newCount;
    });

    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.classList.add('resetting');
    
    setTimeout(() => {
      setMessages([
        { 
          text: "Hi! I'm your Disaster Management Assistant. How can I help you today?\n\nYou can ask me about:\n1. Emergency services\n2. Disaster information\n3. Website navigation\n4. Safety tips\n5. Contact information", 
          isBot: true 
        }
      ]);
      messagesContainer.classList.remove('resetting');
    }, 300);
  };

  const handleAdminAccess = () => {
    navigate('/admin');
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <div className="icons">
            <RiMessage2Fill size={23} />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <button 
              className="back-button" 
              onClick={handleBack}
              title="Reset Chat"
            >
              <IoMdRefresh size={20} />
            </button>
            <h3>Disaster Management Assistant</h3>
            <button 
              className="close-button" 
              onClick={() => setIsOpen(false)}
              title="Close Chat"
            >
              <IoClose size={20} />
            </button>
          </div>

          {showAdminLink && (
            <div 
              onClick={handleAdminAccess}
              style={{
                position: 'absolute',
                top: '60px',
                right: '10px',
                zIndex: 1000,
                background: '#2c3e50',
                padding: '8px 16px',
                borderRadius: '4px',
                animation: 'fadeIn 0.3s ease-in-out',
                cursor: 'pointer'
              }}
            >
              <span 
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                Admin Access
              </span>
            </div>
          )}

          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                {message.isBot && <RiRobot3Fill className="bot-icon" />}
                <div className="message-text">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">
              <div className="icon1">
                <IoSend size={20} />
              </div>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 