import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const navButton = ({ title, cunstomFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomLeft">
    <button
      className="relative text-xl rounded-full p-3 hover:bg-gray-100"
      type="button"
      style={{ color }}
      onClick={cunstomFunc}
    >
    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{background: dotColor}} />        
    </button>
  </TooltipComponent>
);

function Navbar() {
  const { setActiveMenu, screenSize, setScreenSize, currentColor, isClicked } =
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
      Navbar
    </div>
  );
}

export default Navbar;
