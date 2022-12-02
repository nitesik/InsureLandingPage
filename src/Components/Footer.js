import logo from "./Images/logo.svg";
import facebook from "./Images/icon-facebook.svg";
import twitter from "./Images/icon-twitter.svg";
import pinterest from "./Images/icon-pinterest.svg";
import instagram from "./Images/icon-instagram.svg";
import footer_background from "./Images/bg-pattern-footer-mobile.svg";

function Footer() {

  return (
    <div className="footer">
      <div className="upper-footer">
        <img src={logo} alt="logo" />
        <div className="footer-components">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <hr />
      <div className="lower-footer">
        <div className="col">
          <div className="header">OUR COMPANY</div>
          <div>HOW WE WORK</div>
          <div>WHY INSURE</div>
          <div>VIEW PLANS</div>
          <div>REVIEWS</div>
        </div>
        <div className="col">
          <div className="header">HELP ME</div>
          <div>FAQ</div>
          <div>TERMS OF USE</div>
          <div>PRIVACY POLICY</div>
          <div>COOKIES</div>
        </div>
        <div className="col">
          <div className="header">CONTACTS</div>
          <div>SALES</div>
          <div>SUPPORT</div>
          <div>LIVE CHAT</div>
        </div>
        <div className="col">
          <div className="header">OTHERS</div>
          <div>CAREERS</div>
          <div>PRESS</div>
          <div>LICENSES</div>
        </div>
      </div>
      <img src={footer_background} alt="Background" className="footer_background"/>
    </div>
  )
}

export default Footer;