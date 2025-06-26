import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postlogin } from '../store/features/loginSllice';
import { RootState,AppDispatch } from '../store';
import { useRouter } from 'next/router';
import {Login} from '../services/loginAPI'
export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const dispatch:AppDispatch = useDispatch();
  const {  loading } = useSelector((state: RootState) => state.logins);
  const router = useRouter();

  const handleLogin = async () => {
    const result = await dispatch(postlogin({ email, password }));
const data = result.payload as Login;
    // Check login success and role
    if (data.role === 'admin') {
        localStorage.setItem("token", data.token); 
      router.push('/');
    } else {
      alert("Invalid admin credentials");
    }
  };
   
  return (
    <div>
        <header className="bg-gray-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold flex flex-col-reverse items-center">ERP Admin Panel</h1>
      </header>
    
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Admin Login</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div></div>
  );
}
