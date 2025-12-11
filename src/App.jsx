import { Browser } from "@syncfusion/ej2-base";
import "./App.css";
import { useStateContext } from "./contexts/contextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import FileCkeck from "./components/FIleCheck";

function App() {
  const {
    activeMenu,
    themeSettings,
    isClicked,
    currentColor,
    currentMode,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-10000">
            <TooltipComponent content="تنظیمات" position="TopRight">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl
                hover:bg-light-grey text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className={`w-72 fixed shrink-0  z-[${
                isClicked.cart ? "10" : "10009"
              }]
            dark:bg-secendary-dark-bg bg-white`}
            >
              <Sidebar />
            </div>
          ) : (
            <div className=" w-0 dark:bg-secendary-dark-bg ">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen max-w-full grow 
            ${activeMenu && "lg:pr-72 "}`}
          >
            <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark Navbar">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element="صفحه اصلی" />
                <Route path="/ecommerce" element="ضفحه اصلی" />
                <Route path="/file-check" element={<FileCkeck />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
