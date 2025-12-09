import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import BlurText from "../Animations/BlurText";
import shadia from '../Images/shadia.png';
import fontposter from '../Images/fontposter.png';
import CircularGallery from '../Animations/CircularGallery'


const Graphic = () => {

  const handleAnimationComplete = () => {
    console.log("Animation finished");
  };


  return (
    <>
      <Nav />

      <BlurText
        text="Graphic design"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />



<div style={{ height: '900px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#222222" borderRadius={0.05} scrollEase={0.02}/>

  
</div>



      <Footer />
    </>
  );
};

export default Graphic;
