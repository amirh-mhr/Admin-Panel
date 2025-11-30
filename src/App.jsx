import { Browser } from '@syncfusion/ej2-base';
import './App.css'
import { useStateContext } from './contexts/contextProvider'
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [activeMenu, themeSettings, isClicked, currentColor, currentMode] = useStateContext();
  

  return (
    <div className={currentMode === "Dark" ? "dark" : ""} >
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'></div>
      <div className='fixed left-4 bottom-4 z-[10000]'></div>
      <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
      hover:bg-light-grey text-white' style={{background : currentColor, borderRadius: "50%"}} 
      onClick={() => { setthemeSettings(true)}}></button>
      </BrowserRouter>

    </div>
  )
}

export default App
