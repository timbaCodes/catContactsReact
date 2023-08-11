import PropTypes from 'prop-types'

const Contact = ({img,name,phone,email}) => {
  // console.log(props);
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <span><i className="fa-solid fa-phone"></i></span>
        <p>{phone}</p>
      </div>
      <div className="info-group">
      <span><i className="fa-regular fa-envelope"></i></span>
        <p>{email}</p>
      </div>
    </div>
  );
};
Contact.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Contact;
