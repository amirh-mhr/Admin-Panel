import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
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
  const { setActiveMenu, screenSize, setScreenSize, currentColor, isClicked, handleClick } =
    useStateContext();

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
        <NavButton title="سبد خرید"
        customFunc={() => handleClick("cart")}
        color={currentColor}
        icon={<FiShoppingCart/>}/>

        <NavButton title=" چت"
        customFunc={() => handleClick("chat")}
        color={currentColor}
        icon={<BsChatLeft/>}/>

        <NavButton title=" اطلاع رسانی"
        customFunc={() => handleClick("notification")}
        color={currentColor}
        icon={<RiNotification3Line/>}/>


        {isClicked.Cart && <Cart /> }
        {isClicked.Chat && <Chat /> }
        {isClicked.Notification && <Notification /> }
        {isClicked.UserProfile && <UserProfile /> }

       
      </div>
    </div>
  );
}

export default Navbar;
