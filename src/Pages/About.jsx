import React from "react";
import Nav from "../Components/WhiteNav";
import "./About.css";
import myImg from "../Images/myImg.png";
import BlurText from "../Animations/BlurText";
import img1 from '../Images/myimg1.png'
import img2 from '../Images/myimg2.png'
import img3 from '../Images/myimg3.png'
import img4 from '../Images/myimg4.png'
import img5 from '../Images/myimg5.png'
import img6 from '../Images/myimg6.png'
import img7 from '../Images/myimg7.png'

const About = () => {
  const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

  return (
    <>
      <Nav />

      <div className="hero">
        <div className="hero-left">
          <BlurText
            text="Hello"
            delay={200}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />

          <BlurText
            text="I'm Partinia"
            delay={200}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />

          <p className="hero-text">
            Highly motivated and creative Entry Level Web Designer with a strong
            passion for creating visually appealing and user-friendly websites.
            Skilled in responsive design, wireframing, and optimizing website
            performance to drive increased traffic and conversion rates.
          </p>

          <div className="stars star2">✦</div>
        </div>

        <div className="hero-right">
          <div className="img-wrapper">

            <img src={myImg} alt="Partinia" className="heros-img" />

            <span className="tag date">24 March 2005</span>
            <span className="tag city">Cairo, Egypt</span>
          </div>

          <div className="stars star1">✦</div>
        </div>
      </div>


<div className="about-page">
<div className="left-section">
    <BlurText
            text="Education"
            delay={200}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />


<div className="timeline-item">
<span className="dot"></span>
<div>
<p className="year">2008 - 2022</p>
<p className="desc">Saint Fatima language school - IGCSE</p>
</div>
</div>


<div className="timeline-item">
<span className="dot"></span>
<div>
<p className="year">2022 - 2026</p>
<p className="desc">Egypt University of Informatics - Digital arts and designs</p>
</div>
</div>
</div>


<div className="right-section">
<h1 className="about-text top">About</h1>
<h1 className="about-text bottom">About</h1>


<div className="images-row">
<div className="circle"><img src={img1} alt="" /></div>
<div className="circle"><img src={img2} alt="" /></div>
<div className="circle"><img src={img3} alt="" /></div>
<div className="circle"><img src={img4} alt="" /></div>
<div className="circle"><img src={img5} alt="" /></div>
<div className="circle"><img src={img6} alt="" /></div>
<div className="circle"><img src={img7} alt="" /></div>

</div>
</div>
</div>





    </>
  );
};

export default About;
