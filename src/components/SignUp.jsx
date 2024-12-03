import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from '../features/userSlice'; 
import '../App.css'

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Dispatch the register action
    dispatch(register({ name, email, password }));

    // Reset form data
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    // Navigate to the login page
    navigate('/login');
  };

  return (

    <div className="registration-section">
      <h2>Registration</h2>
      <div className="registration-form">
        <div className="registration-input-field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="registration-input-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="registration-input-field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="registration-input-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="registration-submit-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
      <p className="registration-account-text">
        Already have an account? 
      </p>
      <button onClick={() => navigate('/login')} className="registration-link-btn">
        Login
      </button>
    </div>
   
  );
};

export default RegistrationForm;
