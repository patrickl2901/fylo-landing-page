import logo from "../img/logo.svg";
import locationImg from "../img/icon-location.svg";
import phoneImg from "../img/icon-phone.svg";
import emailImg from "../img/icon-email.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img src={logo} alt="Fylo" className="logo-footer" />
      <div className="contact-item item-1">
        <img src={locationImg} alt="Location" className="contact-icon" />
        <p className="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="contact-item item-2">
        <img src={phoneImg} alt="Location" className="contact-icon" />
        <p className="contact-text">+1-543-123-4567</p>
      </div>
      <div className="contact-item item-3">
        <img src={emailImg} alt="Location" className="contact-icon" />
        <p className="contact-text">example@fylo.com</p>
      </div>
    </div>
  )
}

export default Contact;