import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <div className="logo-text">
          D<span>MS</span>
        </div>
      </Link>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/emergency" className="nav-link">Emergency</Link>
        <Link to="/live-track" className="nav-link">Live Track</Link>
        {user ? (
          <>
            <Link to="/profile" className="nav-link">
              <i className="fas fa-user"></i> {user.name}
            </Link>
            <button onClick={handleLogout} className="nav-link logout-link">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Header; 