import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";

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
  },[screenSize]); 

  return <div>Navbar</div>;
}

export default Navbar;
