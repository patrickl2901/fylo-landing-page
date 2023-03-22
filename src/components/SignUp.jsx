import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      setMessage("Please enter a valid email adress");
      setDisabled(true);
    } else {
      setMessage("");
      setDisabled(false);
    }
  }

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    emailValidation();
  }

  return (
    <div className="signup">
      <h1 className="signup-title">Get early access today</h1>
      <p className="signup-text">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to help you.
      </p>
      <form>
        <input
          type="text"
          value={email}
          onChange={handleOnChange}
          required
          name="email"
          placeholder="email@example.com"
          className="input-email"
        />
        <input
        type="submit"
        disabled={disabled}
        value="Get Started For Free"
        className="input-submit"
        />
      </form>
      <div className="valid-message">
        <p className="valid-text">{message}</p>
      </div>
    </div>
  )
}

export default SignUp;