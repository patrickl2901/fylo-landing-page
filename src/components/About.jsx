import aboutImg from "../img/illustration-stay-productive.png";
import iconArrow from "../img/icon-arrow.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <img src={aboutImg} alt="Stay Productive" className="about-img" />
        <div className="about-description">
          <h1 className="about-title">Stay productive, wherever you are</h1>
          <p className="about-text">
            Never let location be an issue when accessing your files. Fylo has you covered 
            for all of your file storage needs.
          </p>
          <p className="about-text">
            Securely share files and folders with friends, family and colleagues for live 
            collaboration. No email attachments required.
          </p>
          <div className="link-container">
            <a href="#" className="about-link">
              See how Fylo works
              <img src={iconArrow} alt="Arrow" className="icon-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;