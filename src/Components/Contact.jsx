import React from "react";
import "./Contact.css";
import star from "../Images/star.svg"; // your pink star
import BlurText from "../Animations/BlurText";

const Contact = () => {

         const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

  return (
    <div className="contact-wrapper">

              <BlurText
  text="Let's get in touch together"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

      <div className="contact-card">
        <img src={star} alt="star" className="contact-star"/>

        <div className="contact-left">
          <p className="contact-small-text">
            Let’s make something amazing, together.
          </p>

          <h2 className="send-it">Just<br/>send it.</h2>

          <p className="contact-description">
            I’m always open to meaningful conversations,
            creative collaborations, or new opportunities.
            Don’t hesitate to drop me a message — I’d love
            to hear from you.
          </p>
        </div>

        <div className="contact-right">
          <label>Full name</label>
          <input type="text" />

          <label>Company</label>
          <input type="text" />

          <label>Email Address</label>
          <input type="email" />

          <label>Tell us about your project</label>
          <textarea rows="5"></textarea>

         

          <button className="send-btn">Send message</button>
        </div>
      </div>

    </div>
  );
};

export default Contact;
