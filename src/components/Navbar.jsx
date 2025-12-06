import React, { useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider";

function Navbar() {
  const { setActiveMenu, screenSize, setScreenSize, currentColor, isClicked } = useStateContext();

  useEffect(() => {

    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize();
  
  
  return () => {
    window.removeEventListener("resize", handleResize)
    
    
  }
}, [])

  



  return <div>Navbar</div>;
}

export default Navbar;
