import React, { useState, useEffect } from "react"; 
import { Browser } from "@syncfusion/ej2-base";
import "./App.css";
import { useStateContext } from "./contexts/contextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// کامپوننت‌ها
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import FileCkeck from "./components/FIleCheck";
import Nurses from "./components/Nurses";
import Doctors from "./components/Doctors";
import Login from "./components/Login";

function App() {
  const {
    activeMenu,
    themeSettings,
    isClicked,
    currentColor,
    currentMode,
    setThemeSettings,
  } = useStateContext();

 
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  
    return localStorage.getItem("loginToken") === "true";
  });

 
  const handleLogin = () => {
    localStorage.setItem("loginToken", "true"); // ذخیره در مرورگر
    setIsLoggedIn(true);
  };

 
  const handleLogout = () => {
    localStorage.removeItem("loginToken"); // حذف از مرورگر
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          
          <div className="fixed left-4 bottom-4 z-[10000]">
            <TooltipComponent content="تنظیمات" position="TopRight">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-[10009]">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen w-full 
            ${activeMenu ? "md:mr-72" : "flex-2"}`}
          >
            <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar w-full z-50">
            
              <Navbar onLogout={handleLogout} />
            </div>

            <div className="p-4"> 
              <Routes>
                <Route path="/" element={<FileCkeck />} />
                <Route path="/file-check" element={<FileCkeck />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/nurses" element={<Nurses />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;