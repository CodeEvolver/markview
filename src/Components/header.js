import darkIcon from '../Assets/icons8-moon.svg';
import lightIcon from '../Assets/icons8-sun.svg';

function Header({theme, toggleTheme}) {
    
    var style = {
         backgroundColor: "#EAE8F6",
         color: "#1A237E",
         fontWeight: "500",
         height: "10%",
    }
    var darkStyle = {
        backgroundColor: "#00003E",
        color: "#1A237E",
        fontWeight: "500",
        height: "10%",
    }
    return (
        <div className="app-header w-100 px-2 px-sm-5 d-flex flex-row align-items-center justify-content-between" style={theme === "light"?style: darkStyle}>
            <p className="">MarkView</p>
            <button className="border-0 bg-transparent" onClick={toggleTheme}>{theme === "light"?<img className="" src={darkIcon} alt="icon"/>:<img className="" src={lightIcon} alt="icon"/>}</button>
        </div>
    );
}

export default Header;