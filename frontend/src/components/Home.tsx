import { useEffect, useState } from 'react';
import { fetchUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        navigate('/');
      }
    };
    loadUser();
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.username}</h1>
    </div>
  );
};

export default Home;
