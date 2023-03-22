import logo from "../img/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Fylo" className="logo"/>
      <nav>
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  )
}

export default Header;