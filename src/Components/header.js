//import darkIcon from '../Assets/icons8-moon.svg';
import lightIcon from '../Assets/icons8-sun-outline.svg';

function Header() {
    return (
        <div className="app-header w-100 px-2 px-sm-5 d-flex flex-row align-items-center justify-content-between">
            <p className="">MarkView</p>
            <img src={lightIcon} alt="icon" className="col-1 bg-light"/>
        </div>
    );
}

export default Header;