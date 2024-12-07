import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [location, setLocation] = useState(''); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login logic (send request to backend)
      const loginData = { email, password };

      fetch('http://127.0.0.1:5000/auth/login', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/profile');
          } else {
            alert('Invalid credentials');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // Handle sign up logic (send request to backend)
      const signUpData = { username, email, password, phone_number: phoneNumber, location };

      fetch('http://127.0.0.1:5000/auth/signup', { // Updated URL to point to your backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'User created successfully') {
            alert('Sign up successful! You can now log in.');
            setIsLogin(true); // Switch to login mode after successful sign up
          } else {
            alert(data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <div className="toggle-link">
        <p>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)} className="link-text">
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)} className="link-text">
                Log In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;