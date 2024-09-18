import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShortenUrl from './pages/ShortenUrl';
import Dashboard from './pages/Dashboard';
import ViewAll from './pages/ViewAll';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './App.css';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/shorten-url" element={<ShortenUrl />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
