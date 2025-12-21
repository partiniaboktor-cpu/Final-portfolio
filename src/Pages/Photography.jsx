import React, { Component } from 'react';
import Nav from '../Components/Nav';
import BlurText from "../Animations/BlurText";

const Photography = () => {

  const handleAnimationComplete = () => {
    console.log("Animation finished");
  };


    return ( <>

<Nav />


 <BlurText
        text="Photography"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      /> 




    </> );
}
 
export default Photography;