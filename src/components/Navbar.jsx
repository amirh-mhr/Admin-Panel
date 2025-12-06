import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";

const NavButton = ({ title, cunstomFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomLeft">
    <button
      className="relative text-xl rounded-full p-3 hover:bg-gray-100"
      type="button"
      style={{ color }}
      onClick={cunstomFunc}
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
      {screenSize <= 1024 && (
        <NavButton
          title="منو"
          cunstomFunc={() => setActiveMenu((prev) => !prev)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      )}
    </div>
  );
}

export default Navbar;
