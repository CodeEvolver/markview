//import darkIcon from '../Assets/icons8-moon.svg';
import lightIcon from '../Assets/icons8-sun-outline.svg';

function Header() {
    var style = {
         backgroundColor: "#EAEEED",
         color: "#00006A",
         fontWeight: "500",
         height: "10%",
    }
    return (
        <div className="app-header w-100 px-2 px-sm-5 d-flex flex-row align-items-center justify-content-between" style={style}>
            <p className="">MarkView</p>
            <p className="">Icon</p>
        </div>
    );
}

export default Header;