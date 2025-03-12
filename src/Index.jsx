import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Emergency from './Emergency';
import LiveTrack from './pages/LiveTrack';
import Login from './Login';
import Signup from './Signup';
import Profile from './pages/Profile';
import Admin from './Admin';
import LearnMore from './pages/LearnMore';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/live-track" element={<LiveTrack />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/learn-more" element={<LearnMore />} />
      
      {/* Add other routes here */}
    </Routes>
  );
};

export default Index;

