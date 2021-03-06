import data from "./testemonials-data";
import "./Testemonial.style.css";
import CardTestimonial from "./CardTestimonial.Component";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="testemonails-cards-wrapper">
      {data.map((item, i) => (
        <CardTestimonial
          img={item.image}
          content={item.content}
          name={item.name}
          position={item.position}
          key={i}
        />
      ))}
      </div>
    </div>
  );
};
export default Testimonials;
