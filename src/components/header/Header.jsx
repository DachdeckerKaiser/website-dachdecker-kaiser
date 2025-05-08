import "./header.css";
import logo from "../../logo_x0_3.png";

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