import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Emergency from './Emergency';
import Login from './Login';
import Signup from './Signup';
import About from './pages/About';
import LiveTrack from './pages/LiveTrack';
import Admin from './Admin';
import Profile from './pages/Profile';
import LearnMore from './pages/LearnMore';

const Index = () =>{
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/live-track" element={<LiveTrack />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
    );
}
export default Index;

