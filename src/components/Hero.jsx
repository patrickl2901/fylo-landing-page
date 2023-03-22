import "./Hero.css";
import mobileBg from "../img/bg-curvy-mobile.svg";
import desktopBg from "../img/bg-curvy-desktop.svg";
import heroImg from "../img/illustration-intro.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
      <img src={mobileBg} alt="bg" className="mobile-bg" />
      <img src={desktopBg} alt="bg" className="desktop-bg" />
      </div>
      <img src={heroImg} alt="illustration-intro" className="hero-img" />
      <h1 className="hero-title">
          All your files in one secure location, accessible anywhere.
      </h1>
      <p className="hero-text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends, 
          family and co-workers.
      </p>
      <button className="get-started-btn">Get Started</button>
    </div>
  )
}

export default Hero;