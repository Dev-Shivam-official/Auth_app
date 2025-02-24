import { useState } from 'react';
import { login, register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(username, password);
    navigate('/home');
  };

  const handleRegister = async () => {
    await register(username, password);
    alert('Registration successful! Please log in.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 border rounded" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 border rounded mt-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-2" onClick={handleLogin}>Login</button>
        <button className="w-full bg-gray-500 text-white p-2 rounded mt-2" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Login;
