import "./Feature.css";

const Feature = (props) => {
  return (
    <div className="feature">
      <img src={props.img} alt="Feature" className="feature-img" />
      <h1 className="feature-title">{props.title}</h1>
      <p className="feature-text">{props.text}</p>
    </div>
  )
}

export default Feature;