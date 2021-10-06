const CardTestimonial = ({ img, content, name, position }) => {
  return (
    <div className="testimonial-card-container">
      <div className="testimonial-image">
        <img src={img} alt="user-img" />
      </div>
      <div className="testimonial-content">
        <p>{content}</p>
      </div>
      <div className="testimonial-userName-position">
        <p className='name'>{name}</p>
        <p className="position">{position}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
