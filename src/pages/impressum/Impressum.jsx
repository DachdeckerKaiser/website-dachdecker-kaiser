import "./impressum.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Impressum() {
    return(
        <>
            <Header />
            <div className="impressumMainContent">
                <h1 className="impressumTitle">Impressum</h1>
                <h2 className="headline">Angaben gemäß § 5 TMG:</h2>
                <h3 className="impressumSubTitle">Dachdecker Kaiser</h3>
                <p className="impressumDescription">
                    Städtelner Str. 28A<br/>
                    04416 Markkleeberg<br/>
                    Deutschland<br/>
                    <br/>
                    <strong>Vertreten durch:</strong><br/>
                    <strong>Enrico Kaiser (Geschäftsführer)</strong><br/>
                    <br/>
                    Tel: <a className="link" href="tel:01774821477">0177-4821477</a><br/>
                    E-Mail: <a className="link" href="mailto:e.kaiser@dachdecker-kaiser.de">e.kaiser@dachdecker-kaiser.de</a><br/>
                </p>
                <a href="/" className="backButton">
                    <i className="bi bi-arrow-left"></i>
                    Zurück
                </a>
            </div>
        </>

    );
}

export default Impressum;