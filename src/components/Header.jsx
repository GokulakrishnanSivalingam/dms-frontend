import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavigation('/')}>
        <div className="logo-text">
          D<span>MS</span>
        </div>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavigation('/')} className="nav-link">Home</button>
        <button onClick={() => handleNavigation('/about')} className="nav-link">About</button>
        <button onClick={() => handleNavigation('/emergency')} className="nav-link">Emergency</button>
        <button onClick={() => handleNavigation('/live-track')} className="nav-link">Live Track</button>
        {user ? (
          <>
            <button onClick={() => handleNavigation('/profile')} className="nav-link">
              <i className="fas fa-user"></i> {user.name}
            </button>
            <button onClick={handleLogout} className="nav-link logout-link">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleNavigation('/login')} className="nav-link">Login</button>
            <button onClick={() => handleNavigation('/signup')} className="nav-link">Signup</button>
          </>
        )}
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header; 