import "./header.css";
import logo from "../../logo_dachdecker_kaiser_white_transparent.png";

function Header() {
    return(
        <>
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
            </header>
        </>
    )
}

export default Header;