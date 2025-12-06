
import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import './Home.css';
import myimg2 from '../Images/myimg2.svg'
import BlurText from "../Animations/BlurText";
import figma from "../Images/figma.svg"
import ai from "../Images/illustartor.svg"
import AE from "../Images/aftereffects.svg"
import ps from "../Images/ps.svg"
import vs from "../Images/vcode.svg"
import js from "../Images/js.svg"
import one from "../Images/one.svg"
import two from "../Images/two.svg"
import three from "../Images/three.svg"
import four from "../Images/four.svg"
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import '../Animations/LogoLoop';
import DecryptedText from '../Animations/DecryptedText';
import icong from '../Images/icong.svg';
import graphic from "../Images/graphic.png" ;
import ui from '../Images/ux/ui.png';
import web from '../Images/web programming.png';
import Footer from "../Components/Footer";



const handleAnimationComplete = ({ text }) => {
  
  (
<h1 className="section-title">{text}</h1>
);


const WorkCard = ({ image, title }) => (
<div className="work-card">
<div className="img-frame">
<img src={image} alt={title} />
</div>
<p className="work-label">{title}</p>
</div>
);
  
  return (
    <>
      <Nav />
      <Hero />


<div className="whoami-container">


<BlurText
  text="Who am i ?"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>


<div className="center-image-wrapper">
<img
src={myimg2}
alt="profile"
className="center-image"
/>


</div>


<div className="icon beach"></div>
<div className="icon notes"></div>
<div className="icon coding"></div>
<div className="icon coffee"></div>
<div className="icon weather"></div>
<div className="icon shopping"></div>
</div>

 <div className="skills-container">

<BlurText
  text="Skills"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

      <section className="section">
        <h2 className="section-title">Technical skills</h2>


        <div className="icons-row">
          <img src={figma} alt="Figma" />
          <img src={ai} alt="Illustrator" />
          <img src={AE} alt="After Effects" />
          <img src={ps} alt="VS Code" />
          <img src={vs} alt="JavaScript" />
          <img src={js} alt="Photoshop" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Social skills</h2>

        <div className="icons-row">
          <img src={one} alt="Idea" />
          <img src={two} alt="Teamwork" />
          <img src={three} alt="Communication" />
          <img src={four} alt="Network" />
        </div>
      </section>

    </div>

{/* <div className="what-section">
<SectionTitle text="What I do ?" />


<div className="work-cards-container">
<WorkCard image="/graphic.png" title="Graphic design" />
<WorkCard image="/uxui.png" title="UX/UI" />
<WorkCard image="/webdev.png" title="Web development" />
</div>
</div> */}


<section className="what-container">
    <BlurText
  text="What i do ?"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={graphic} alt="Graphic design" />
          </div>
          <p className="card-label">Graphic design</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={ui} alt="UI/UX" />
          </div>
          <p className="card-label">UI/UX</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-img-wrap">
            <img src={web} alt="Web development" />
          </div>
          <p className="card-label">Web development</p>
        </div>
      </div>
    </section>




<div className="contact-wrapper">
     <BlurText
  text="Let's get in touch together"
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>

      <DecryptedText
      text="Whenever , Wherever were meant to work together! "
      speed={50}
      maxIterations={20}
      characters="ABCD1234!?"
      className="revealed"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
      />

      <div className="form-container">
        <h3>Contact with me</h3>

        <div className="row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <div className="row">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>

        <h3>Your requirement</h3>

        <div className="tags">
          <button>Website</button>
          <button>Graphics</button>
          <button>Front-end development</button>
          <button>Website</button>
        </div>

        <textarea placeholder="How can I help ?" />

        <button className="submit-btn">Submit</button>
      </div>

      <div className="icons">
       <img className="icong" src={icong} alt="" />
      </div>
    </div>

<Footer />
    </>
  );
};

export default handleAnimationComplete;
