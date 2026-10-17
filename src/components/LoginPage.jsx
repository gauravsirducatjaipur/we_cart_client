import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:1300/api/login', formData);
      toast.success(response.data.message || 'Login successful!', { duration: 2000, });

      // Save token if the backend returns one
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="container p-4 shadow rounded mt-5 mb-5">
        <h2 className="alert alert-dark text-center p-2 mb-5 text-uppercase rounded shadow">Login Form</h2>

        <div>
          <label>Email Address</label>
          <input type="email" name="email" className="form-control mb-4" placeholder="Enter email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" className="form-control mb-4" placeholder="Enter password" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="btn btn-sm btn-outline-dark fw-bold w-25 d-block m-auto mb-3 text-uppercase" onClick={handleSubmit}>Login</button>
        </div>

        <span>Don't have an account? </span>
        <Link to="/register" className="text-primary fw-bold text-decoration-none">Register here</Link>
      </div>
    </>
  );
}

export default LoginPage;