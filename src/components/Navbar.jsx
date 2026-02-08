import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5"; 
import { CgProfile } from "react-icons/cg";
import Chat from "./Chat";
import Cart from "./cart";
import Notification from "./notification";
import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc} 
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);


const Navbar = ({ onLogout }) => {
  const { 
    setActiveMenu, 
    screenSize, 
    setScreenSize, 
    currentColor, 
    isClicked, 
    handleClick 
    
  } = useStateContext();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };

  const shamsiDate = currentDateTime.toLocaleDateString('fa-IR', dateOptions);
  const shamsiTime = currentDateTime.toLocaleTimeString('fa-IR', timeOptions);

  return (
    <div className="flex justify-between p-3 md:mx-13 relative shadow-sm dark:shadow-gray-600 ">
      
      <NavButton
        title="منو"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex flex-row-reverse gap-2 items-center">
        
     
        <NavButton
          title="خروج"
          customFunc={onLogout} 
          color="red" 
          icon={<IoExitOutline />}
        />

        <NavButton
          title="پروفایل"
          onClick={UserProfile}
          color={currentColor}
          icon={<CgProfile />}
        />

        
        <div className="hidden md:flex items-center mx-4 text-sm  font-Bold  text-black">
          <span className="ml-3">{shamsiDate}</span>
          <span>|</span>
          <span className="mr-3">{shamsiTime}</span>
        </div>

    
     
        {isClicked.userProfile && <UserProfile />}
        
      </div>
    </div>
  );
};

export default Navbar;