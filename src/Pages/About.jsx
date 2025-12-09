import React from "react";
import WhiteNav from "../Components/WhiteNav";
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
import img8 from '../Images/myimg8.png'
import Footer from "../Components/Footer";
import ImageTrail from '../Animations/Imagetrail'
import photo1 from '../Images/photo1.png' ;
import photo2 from '../Images/photo2.png' ;
import photo3 from '../Images/photo3.png' ;
import photo4 from '../Images/photo4.png' ;
import photo5 from '../Images/photo5.png' ;
import photo6 from '../Images/photo6.png' ;
import photo7 from '../Images/photo7.png' ;
import photo8 from '../Images/photo8.png' ;
import photo9 from '../Images/photo9.png' ;
import photo10 from '../Images/photo10.png' ;
import photo11 from '../Images/photo11.png' ;
import photo12 from '../Images/photo12.png' ;
import photo13 from '../Images/photo13.png' ;
import photo14 from '../Images/photo14.png' ;
import photo15 from '../Images/photo15.png' ;
import photo16 from '../Images/photo16.png' ;
import photo17 from '../Images/photo17.png' ;
import ScrollReveal from '../Animations/Scrollreveal';



const About = () => {
  const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

  
  return (
    <>
      <WhiteNav />

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

<BlurText
            text="More of me"
            delay={200}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
  className="hover"
>
  ⭐ “Move your cursor to uncover my story”
</ScrollReveal>

<div style={{ height: '500px', position: 'relative', overflow: 'hidden , width: 100%' }}>
  <ImageTrail
    items={[
      photo1,
      photo2 ,     
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9,
      photo10,
      photo11,
      photo12,
      photo13,
      photo14,
      photo15,
      photo16,
      photo17,



    ]}
    variant={1}
  />
</div>

</div>


<div className="right-section">
<h1 className="about-text top">About</h1>
<h1 className="about-text bottom">About</h1>




</div>

</div>



<Footer />



    </>
  );
};

export default About;
