import "./footer.css";
import logo from "../../logo_x0_5.png";

function Footer() {
    return(
        <footer>
            <div className="footerContent">
                <div className="col col1">
                    <img src={logo} className="footerLogo"></img>
                </div>
                <div className="col col2">
                    <h2 className="footerTitle">Dachdecker Kaiser</h2>
                    <p className="footerDescription">
                        Städtelner Str. 28A<br/>
                        04416 Markkleeberg<br/>
                        Tel: <a className="link" href="tel:01774821477">0177-4821477</a><br/>
                        E-Mail: <a className="link" href="mailto:e.kaiser@dachdecker-kaiser.de">e.kaiser@dachdecker-kaiser.de</a><br/>
                    </p>
                </div>
                <div className="col col3">
                    <a href="#impressum" className="impressumLink">Impressum</a>
                </div>
            </div>
            <div className="footerBottom">
                <span>Designed and Developed by <a href="http://www.flowefy.de" target="_blank" className="flowefy" rel="noreferrer">flowefy.</a></span>
            </div>
        </footer>
    )
}

export default Footer;