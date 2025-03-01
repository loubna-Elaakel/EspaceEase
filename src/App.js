import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyList from "./PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserForm from './components/UserForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/user-form" element={<UserForm />} />
        
      </Routes>
    </Router>
  );
};

export default App;
