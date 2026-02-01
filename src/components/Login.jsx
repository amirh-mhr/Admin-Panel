import React, { useState } from 'react';
import { FaUserDoctor } from "react-icons/fa6";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {

    if  ( username === "admin" && password === "1234" ) {
        onLogin()
    } else {
        setError("نام کاربری یا رمز عبور اشتباه است!")
    }

  };

  return (

    <div className="flex items-center justify-center h-screen bg-indigo-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-indigo-100">
        
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
             <FaUserDoctor size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">سامانه هوشمند بیماران  </h1>
          <p className="text-gray-500 mt-2">لطفاً برای ورود اطلاعات را وارد کنید</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نام کاربری</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رمز عبور</label>
            <input 
              type="password" 
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">{error}</p>
          )}

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200 mt-2"
          >
            ورود به پنل
          </button>
        </form>

      </div>
    </div>





    
  )
};

export default Login;