import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './Admin';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default Index;

