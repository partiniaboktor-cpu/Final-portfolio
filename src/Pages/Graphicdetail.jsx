import React, { useEffect, useState } from "react";
import WhiteNav from '../Components/WhiteNav';
import '../Pages/Graphicdetail.css';
import shadia from '../Images/shadia.png' ;
import texture from '../Images/darkbackground.svg' ;
import BlurText from "../Animations/BlurText";
import shadia2 from '../Images/shadia2.png' ;
import whitetexture from '../Images/lightbackground.svg' ;
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import fontposter from '../Images/fontposter.png';
import fontposter2 from '../Images/fontposter2.png';
import idcard from '../Images/idcard.png';
import idcard2 from '../Images/idcard2.png';
import tea from '../Images/tea.png';
import { supabase } from "../Supabase";

const Graphicdetail = () => {

  
   const details = {
  "01": {
    title: "Shadia poster",
    description:
      "The Shadia Coloring Poster is a digitally illustrated artwork created using Adobe Illustrator, designed to transform a real image of Shadia into a stylized, line-art composition suitable for coloring." ,
    img: "shadia",
    scope: "Posters",
    timeframe: "3 weeks",
    mockup1: shadia,
    mockup2: shadia2
  },
  "02":{
    title:"Font name poster",
    description:"The Font Name Poster is a typographic design project created to highlight and celebrate a chosen typeface through a clean, modern, and visually impactful layout. The poster focuses on showcasing the font’s unique characteristics—such as its personality, structure, style, and versatility—while maintaining strong visual hierarchy and aesthetic balance.",
    img: fontposter ,
    scope: "Posters",
    timeframe: "3 weeks",
    mockup1: fontposter ,
    mockup2: fontposter2 
  },
 "03":{
    title:"Id-Cards ",
    description:"The ID Cards Design project focuses on creating clean, functional, and visually cohesive identification cards that represent the brand’s identity with clarity and professionalism. The goal was to design ID cards that balance aesthetics with practicality, ensuring that essential information is easy to read while maintaining a strong visual presence aligned with the organization’s style guidelines.",
    img: idcard ,
    scope: "ID-cards",
    timeframe: "3 weeks",
    mockup1: idcard2 ,
    mockup2: idcard 
  },
 "04":{
    title:"Shay-el arousa rebranding",
    description:"The stationery design for Shay El Arousa was developed as part of a cohesive rebranding process that reflects the brand’s heritage, warmth, and artisanal quality. The visual system balances traditional influences with a modern aesthetic, using refined typography, earthy tones, and subtle decorative elements inspired by tea culture.",
    img: tea ,
    scope: "Posters",
    timeframe: "3 weeks",
    mockup1: "fontposter" ,
    mockup2: "fontposter2" 
  }

};


    let {id}= useParams ();


    const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

const [loading, setLoading] = useState(true);
const [Projects, setProjects] = useState("") ;


useEffect(()=>{

 async function getAllProjectsAPI(){
  const res = await supabase.from("Projects").select("*");
  setProjects(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllProjectsAPI();

},[]);

if (loading) return <p>Loading...</p>;



    return ( <>
    
    <WhiteNav />
    

     <section
      className="project-section7"
      style={{ backgroundImage: `url(${texture})` }}
    >
      {/* Top right link */}
   

      {/* Title */}
    

   <BlurText
        text={details[id].title}
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="content7">
        {/* Left */}
        <div className="left7">
          <h2 className="overview-title7">- Project overview</h2>
          <p className="text7">
            {details[id].description}
          </p>

          <h2 className="tools-title7">2- Tools i used</h2>

          <div className="tool7">
            <span className="ai7">Ai</span>
            <span className="tool-name7">Adobe Illustrator</span>
          </div>
        </div>

        {/* Center Image */}
        <div className="center7">
{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (
          <img
            src={Projects.Cover_image}
            alt="Shadia Poster"
            className="image7"
          />
  ))
}
        </div>


        <div className="right7">
{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (
    <p className="info7">
      <strong>3- My role:</strong>
      <br />
      {Projects.Role}
    </p>
  ))
}
{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (
          <p className="info7">
            <strong>4- Scope</strong>
            <br />
            {Projects.Scope}
          </p>
  ))
}

{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (
          <p className="info7">
            <strong>5- Time-frame</strong>
            <br />
            {Projects.Time_frame}
          </p>
  ))
}

        </div>
      </div>
    </section>
    
   <section
      className="mockups-section7"
      style={{ backgroundImage: `url(${whitetexture})` }}
    >
      <BlurText
        text="Mockups"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (
      <div className="mockups-grid7">
        <div className="mockup-card7">
          <img src={Projects.Cover_image} alt="Shadia mockup" />
        </div>

        <div className="mockup-card7">
          <img src={Projects.Mockup} alt="Shadia mockup" />
        </div>
      </div>
  ))
}

    </section>


<Footer />
    
    </> );
}
 
export default Graphicdetail;