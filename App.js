import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AddFundsPage from './pages/AddFundsPage';
import SendMoneyPage from './pages/SendMoneyPage';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to Login Page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-funds" element={<AddFundsPage />} />
        <Route path="/send-money" element={<SendMoneyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
