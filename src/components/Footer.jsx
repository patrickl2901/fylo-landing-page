import SignUp from "./SignUp.jsx";
import Contact from "./Contact.jsx";
import FooterNav from "./FooterNav.jsx";
import logo from "../img/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="extended-main-bg"></div>
      <SignUp />
      <div className="logo-container">
        <img src={logo} alt="Fylo" className="logo-footer-desktop" />
      </div>
      <div className="footer-lower">
        <Contact />
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer;