import "./Testimonial.css";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <p className="testimonial-text">{props.text}</p>
      <div className="profile">
        <img src={props.img} alt="Profile" className="profile-img" />
        <div className="profile-text">
          <p className="profile-name">{props.name}</p>
          <p className="profile-occupation">{props.occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;