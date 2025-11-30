import React from "react"
import { useStateContext } from "../contexts/contextProvider"

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleclicksidebar = () => {
        if(activeMenu && screenSize <= 1024) {
            setActiveMenu(false);
        }
        
    }
    return (
        <div className="mr-3 h-screen md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10">
            
        </div>
    )
}


export default Sidebar



