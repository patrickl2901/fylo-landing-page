import Testimonial from "./Testimonial.jsx";
import profile1 from "../img/profile-1.jpg";
import profile2 from "../img/profile-2.jpg";
import profile3 from "../img/profile-3.jpg";
import quotesImg from "../img/bg-quotes.png";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="quotes-container">
        <img src={quotesImg} alt="Quotes" className="quotes-img" />
      </div>
      <div className="testimonials-container">
        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled collaboration machine."
          img={profile1}
          name="Satish Patel"
          occupation="Founder & CEO, Huddle"
        />
        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled collaboration machine."
          img={profile2}
          name="Bruce McKenzie"
          occupation="Founder & CEO, Huddle"
        />
        <Testimonial
          text="Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled collaboration machine."
          img={profile3}
          name="Iva Boyd"
          occupation="Founder & CEO, Huddle"
        />
      </div>
    </div>
  )
}

export default Testimonials;