import darkIcon from '../Assets/icons8-moon.svg';
import lightIcon from '../Assets/icons8-sun.svg';

function Header({theme, toggleTheme}) {
    
    var style = {
         backgroundColor: theme === "light"? "#EAE8F6": "#000020",
         color: theme === "light"? "#1A237E": "#EAE8F6",
         fontWeight: "500",
         height: "7%",
    }
    return (
        <div className="app-header w-100 px-2 px-sm-5 d-flex flex-row justify-content-between" style={style}>
            <p className="my-auto">MarkView</p>
            <button className="border-0 bg-transparent" onClick={toggleTheme}>{theme === "light"?<img className="" src={darkIcon} alt="icon"/>:<img className="" src={lightIcon} alt="icon"/>}</button>
        </div>
    );
}

export default Header;