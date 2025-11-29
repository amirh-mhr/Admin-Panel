import './App.css'
import { useStateContext } from './contexts/contextProvider'

function App() {

  const [activeMenu, themeSettings, isClicked, currentColor, currentMode] = useStateContext();
  

  return (
    <div className={currentMode === "Dark" ? "dark" : ""} >

    </div>
  )
}

export default App
