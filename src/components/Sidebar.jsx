import { useStateContext } from "../contexts/contextProvider";
import { Link, NavLink } from "react-router-dom";
import { SlPuzzle } from "react-icons/sl";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleclicksidebaar = () => {
    if (activeMenu && screenSize <= 1024) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2";
  return (
    <div
      className="mr-3 h-screen md:overflow-hidden overflow-auto
        md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleclicksidebaar}
              className="flex items-center gap-3 mr-3 mt-4 text-xl font-bold tracking-tight 
                    dark:text-white text-slate-900"
            >
              <span className="border-2 border-slate-500 rounded-full p-5 flex items-center justify-center">
                <SlPuzzle className="text-xl" />
              </span>
              <span>پنل کاربری</span>
            </Link>
            <TooltipComponent
              enableRtl={true}
              content="بستن منو"
              position="BottomCenter"
            >
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((perv) => !perv);
                }}
                className="text-xl rounded-full p-1 hover:bg-gray-200  dark:hover:bg-slate-600
                mt-4 ml-4 block dark:text-gray-50 lg:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${links.to}`}
                    key={link.name}
                    onclick={handleclicksidebaar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  ></NavLink>
                ))}
              </div>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
