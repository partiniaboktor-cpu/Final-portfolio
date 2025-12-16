import React, { Component, useEffect, useState, useRef } from "react";
import "./Blogsdetail.css";
import blogss from "../Images/blogss.png";
import paperTexture from "../Images/lightbackground.svg";
import star from "../Images/star.svg";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import BlurText from "../Animations/BlurText";
import VariableProximity from "../Animations/Variable Proximity";
import { supabase } from "../Supabase";




export default function Blogs() {

  const containerRef = useRef(null);

     const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

const [Blog, setProjects] = useState ([{ 
   Question:"",
   Description:""
}
]);
useEffect(()=>{

 async function callGetApi(){

    const Blogapi = await supabase.from("Blog").select("*");
    setProjects(Blogapi.data)
    
}


callGetApi();
},[]);



  return (

    <>
    <Nav />
    <div className="blogs-pages" style={{ backgroundImage: `url(${paperTexture})` }}>
      
       <BlurText
        text="Blogs"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      {/* Decoration Left */}


      {/* Decoration Right */}
  

    


      <div className="blogs-cards" style={{ backgroundImage: `url(${blogss})` }}>
        <div className="cards-overlay">
          <div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={Blog[0].Question}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
     style={{ fontSize: "32px" }} 

  />
</div>


          <p className="cards-texts">
            From my point of view Nasr City, a bustling district in Cairo which has 
            high percentage of being UX/UI designer. These professionals offer work 
            as freelance or agencies or startup, part-time and full-time job for 
            their field. With Cairo's growing tech scene, UI designers here blend 
            local cultural insights with global design trends, making them adept at 
            creating interfaces for apps, websites, and software tailored to diverse 
            audiences.
          </p>

          <p className="cards-texts">
                    {Blog[0].Description}

          </p>
        </div>
      </div>
    </div>
<Footer />
    </>
  );
}
