import React from "react";
import "../Components/Hero.css";
import myImg from "../Images/Profile.png";
import BlurText from "../Animations/BlurText";
import star from '../Images/star.svg';
import DecryptedText from '../Animations/DecryptedText';



const handleAnimationComplete = () => { 
      console.log('Animation completed!');


      
  return (
    <div className="hero-container">
      <div className="hero-content">


<BlurText
  text="Portfolio"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

<img className="star" src={star} alt="" />
        <div className="hero-details">
             <div className="backportfolio">
          <img src={myImg} alt="me" className="hero-img" />

         <div className="rowportfolio">
<h1 className="portfolioname">Portfolio</h1>
<h1 className="portfolioname">Portfolio</h1>
<h1 className="portfolioname">Portfolio</h1>
</div>
                  </div>
          <div className="text-section">
            <h2 className="role">UX/UI Designer</h2>
            <h3 className="role2">& Graphic Designer</h3>
          </div>
        </div>
{/* <img className="star2" src={star} alt="" /> */}

<DecryptedText
text="Bringing your product’s future glow-up from imagination to interface. "
speed={50}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
{/* <DecryptedText
  text="Bringing your product’s future glow-up from imagination to interface. "
  animateOn="view"
  revealDirection="center"
/> */}
</div>


      </div>
    </div>

    
  );
};

export default handleAnimationComplete;
