import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import Chat from "./Chat";
import Cart from "./cart";
import Notification from "./notification";
import UserProfile from "./UserProfile";


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      className="relative text-xl rounded-full p-3 hover:bg-gray-100"
      type="button"
      style={{ color }}
      onClick={customFunc}
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        style={{ background: dotColor }}
      />
      {icon}
    </button>
  </TooltipComponent>
);







function Navbar() {
  const {  setActiveMenu, screenSize, setScreenSize, currentColor, isClicked, handleClick } =
    useStateContext();
    
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
    handleResize(); // سایز صفحه ست میکنه

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else setActiveMenu(true);
  }, [screenSize]);

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit',  };

  const shamsiDate = currentDateTime.toLocaleDateString('fa-IR', dateOptions);
  const shamsiTime = currentDateTime.toLocaleTimeString('fa-IR', timeOptions);

  return (
    <div
      className="flex dark:shadow-gray-800 shadow-sm 
  justify-between p-2 shadow-gray-200 relative"
    >
      
        <NavButton
          title="منو"
          customFunc={() => setActiveMenu((prev) => !prev)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      
      <div className=" flex flex-row-reverse">

        <NavButton title=" خروج"
        customFunc={() => handleClick("chat")}
        color={currentColor}
        icon={<IoExitOutline />}/>

        <NavButton title=" اطلاع رسانی"
        customFunc={() => handleClick("notification")}
        color={currentColor}
        icon={<RiNotification3Line/>}/>

    
        
    <div className="flex items-center mr-4 text-sm font-bold text-gray-950 dark:text-gray-950">
          <span> {shamsiDate} | {shamsiTime}</span>
          
        </div>     


        {isClicked.Cart && <Cart /> }
        {isClicked.Chat && <Chat /> }
        {isClicked.Notification && <Notification /> }
        {isClicked.UserProfile && <UserProfile /> }

       
      </div>
    </div>
  );
}

export default Navbar;
