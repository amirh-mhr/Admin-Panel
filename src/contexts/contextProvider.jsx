import {createContext, useContext, useState}  from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,
}



export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState("#241a84ff");
    const [currentMode, setCurrentMode] = useState("Dark");
    const [themeSettings, setThemeSettings] = useState(false);


    const handleClick = (clicked) => {

        setIsClicked({...initialState, [clicked]: !isClicked[clicked]})
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("colorMode", color)
        setThemeSettings(false);

    }

    const [screenSize, setScreenSize] = useState(undefined);


    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu, isClicked,setIsClicked, handleClick,screenSize,setScreenSize, 
        currentColor,currentMode, setColor,setMode,themeSettings,setThemeSettings}}>
            {children}
        </StateContext.Provider>
    )

        
    
}


export const useStateContext = () => useContext(StateContext);
