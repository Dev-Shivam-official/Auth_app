import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem('token', response.data.token);
};

export const register = async (username: string, password: string) => {
  await axios.post(`${API_URL}/register`, { username, password });
};

export const fetchUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  const response = await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
