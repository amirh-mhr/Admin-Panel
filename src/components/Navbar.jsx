import { useStateContext } from "../contexts/contextProvider";



function Navbar() {
    const { setActiveMenu, screenSize, setScreenSize, currentColor, isClicked } = useStateContext();
    return <div>Navbar</div>;
}

export default Navbar;