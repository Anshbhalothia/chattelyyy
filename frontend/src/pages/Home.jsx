import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../main.jsx';
import { clearUserData} from '../redux/userSlice.js';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      await axios.post(`${serverUrl}/api/auth/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      dispatch(clearUserData());
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-100">Welcome to Chattely</h1>
        {userData && (
          <p className="text-slate-400 text-sm">
            Logged in as: <span className="text-indigo-400 font-medium">{userData.userName || userData.email}</span>
          </p>
        )}
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-600/80 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;