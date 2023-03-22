import Feature from "./Feature.jsx";
import accessImg from "../img/icon-access-anywhere.svg";
import securityImg from "../img/icon-security.svg";
import collabImg from "../img/icon-collaboration.svg";
import storeImg from "../img/icon-any-file.svg";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features">
        <Feature 
          img={accessImg}
          title="Access your files, anywhere"
          text="The ability to use a smartphone, tablet or computer to access your account 
            means your files follow you everywhere."
        />
        <Feature 
          img={securityImg}
          title="Security you can trust"
          text="2-factor authentication and user-controlled encryption are just a couple 
            of the security features we allow to help secure your files."
        />
        <Feature 
          img={collabImg}
          title="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues 
            for live collaboratio. No email attachments required."
        />
        <Feature 
          img={storeImg}
          title="Store any type of file"
          text="Whether you're sharing holidays photos or work documents, Fylo has you 
            covered allowing for all file types to be securely stored and shared."
        />
      </div>
    </div>
    
  )
}

export default Features;