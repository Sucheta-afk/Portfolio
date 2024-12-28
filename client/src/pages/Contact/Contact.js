import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"><b>Contact Me</b></h2>
      <hr />
      <p className="pb-3 text-center">Feel free to reach out to me anytime!</p>

      <div className="contact-info">
        <div className="info-item">
          <h3>Email:</h3>
          <p><a href="mailto:suchetarshinganmakki">suchetarshinganmakki@gmail.com</a></p>
        </div>

        <div className="info-item">
          <h3>Phone:</h3>
          <p><a href="tel:+1234567890">120982348</a></p>
        </div>

        <div className="info-item">
          <h3>LinkedIn:</h3>
          <p>
            <a href="https://www.linkedin.com/in/sucheta-s-164b03322/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/sucheta-s-164b03322/
            </a>
          </p>
        </div>

        <div className="info-item">
          <h3>GitHub:</h3>
          <p>
            <a href="https://github.com/Sucheta-afk" target="_blank" rel="noopener noreferrer">
              github.com/sucheta-afk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
