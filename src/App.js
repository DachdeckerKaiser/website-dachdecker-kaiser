import "../node_modules/animate.css/animate.min.css"
import qrcode from "./qrcode_calendly.png"
import './App.css';
import Header from './components/header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContent">
          <div className="heroSection animate__animated animate__bounce">
            <div className="heroLeft">
              <h1 className="heroTitle">Wir arbeiten gerade am Dach unserer Webseite</h1>
              <h3 className="heroSubTitle">Doch keine Sorge – unser Handwerk läuft schon auf Hochtouren!</h3>
              <p className="heroDescription">
                Während unsere Homepage noch wächst, sind wir bereits für Sie im Einsatz in Markkleeberg und Umgebung – mit ehrlichem Handwerk, familiärer Tradition und modernen Lösungen rund ums Dach.
              </p>
            </div>
            <div className="heroRight">
            </div>
          </div>
          <div className="secondSection">
            <div className="secondLeft">
              <h1 className="secondTitle">🎯 Jetzt Neu!</h1>
              <p className="secondDescription">
                Kostenfreie Dachbesichtigung für alle Markkleeberger!
                Sichern Sie sich bis 31.05.2025 Ihre professionelle Dachprüfung mit ehrlicher Einschätzung und unverbindlicher Beratung – direkt bei Ihnen vor Ort.
              </p>

              <h2 className="secondaryTitle"> Termin direkt online buchen</h2>
              <button type="button" className="appointmentButton">Buchen</button>
            </div>
            <div className="secondRight">
              <div className="qrCodeBox">
                <h2 className="qrCodeTitle">Oder einfach QR-Code scannen</h2>
                <img src={qrcode} className="qrCode" alt="https://calendly.com/e-kaiser-dachdecker-kaiser/"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
