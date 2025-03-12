import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { LuLogOut } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

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
    setIsOpen(false); 
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
          C<span>RISIZ</span>
        </div>
      </div>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavigation('/')} className="nav-link">Home</button>
        <button onClick={() => handleNavigation('/about')} className="nav-link">About</button>
      
        <button onClick={() => handleNavigation('/live-track')} className="nav-link">Live Track</button>
        {user ? (
          <>
            <button onClick={() => handleNavigation('/profile')} className="nav-link">
            <FaUserCircle/>   {user.name}
            </button>
            <button onClick={handleLogout} className="nav-link logout-link">
           <LuLogOut/>  Logout
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