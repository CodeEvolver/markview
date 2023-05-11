//import './App.css';
import {useState} from 'react';
import Header from './Components/header.js';
import Main from './Components/main.js';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if(theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div className="app d-flex flex-column align-items-center p-0 vh-100">
      <Header toggleTheme={()=>toggleTheme()} theme={theme}/>
      <Main theme={theme}/>
    </div>
  );
}

export default App;
