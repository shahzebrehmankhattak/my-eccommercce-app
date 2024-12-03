import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import '../App.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        dispatch(login(storedUser));
        console.log("Login successful:", storedUser);
        navigate('/dashboard'); 
      } else {
        setErrors({ ...errors, credentials: 'Invalid email or password' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (

 <div className="login-section">
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-input-field icon-input">
          <FaEnvelope className="login-input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="login-error">{errors.email}</p>}
        </div>
        <div className="login-input-field icon-input">
          <FaLock className="login-input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div
            className="login-eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        
        </div>
        {errors.password && <p className="login-error">{errors.password}</p>}
          {errors.credentials && <p className="login-error">{errors.credentials}</p>}  
       
        <button type="submit" className="login-submit-btn">Log in</button>
      </form>
      <a className="login-forgot-link">Forgot password?</a>
      <p className="login-account-text">Have no account yet?</p>
      <button className="login-link-btn" onClick={() => navigate('/')}>
        Registration
      </button>
    </div>
   
  
   
  );
};

export default LoginForm;
