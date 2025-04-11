import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Optional for styling

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('citizen');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    // You can later replace this with actual auth logic
    if (username && password) {
      localStorage.setItem('userRole', role);
      if (role === 'citizen') {
        navigate('/citizen');
      } else {
        navigate('/authority');
      }
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Role:
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="citizen">Citizen</option>
            <option value="authority">Authority</option>
          </select>
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="button primary">Login</button>
      </form>
    </div>
  );
};

export default Login;