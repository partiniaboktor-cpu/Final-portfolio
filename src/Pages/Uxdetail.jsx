import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import './Uxdetail.css';
import zoo from '../Images/ux/giza zoo.png' ;
import figma from '../Images/figma.svg';
import zoomockup1 from '../Images/ux/zoo mockup 1.png'
import zoomockup2 from '../Images/ux/zoo mockup 2.png'
import BlurText from "../Animations/BlurText";
import Footer from '../Components/Footer';
import { supabase } from "../Supabase";
import { useParams } from 'react-router-dom';
import gizazoo from '../Images/ux/giza zoo.png' ;

const Uxdetail = () => {


 const details = {
  "01": {
    img: "gizazoo",
    overview: "The Shadia Coloring Poster is a digitally illustrated artwork created using Adobe Illustrator, designed to transform a real image of Shadia into a stylized, line-art composition suitable for coloring. The project focuses on simplifying complex visual details while preserving character identity, resulting in a clean, balanced, and visually engaging coloring poster." ,
    tools: "Figma",
    app: "Figma",
    role: "UX/UI Designer",
    scope: "websites",
    timeframe: "3 weeks",
  },
  "02":{
  img: "gizazoo",
    overview: "The Shadia Coloring Poster is a digitally illustrated artwork created using Adobe Illustrator, designed to transform a real image of Shadia into a stylized, line-art composition suitable for coloring. The project focuses on simplifying complex visual details while preserving character identity, resulting in a clean, balanced, and visually engaging coloring poster." ,
    tools: "Figma",
    app: "Figma",
    role: "UX/UI Designer",
    scope: "websites",
    timeframe: "3 weeks",
  },
 "03":{
    img: "gizazoo",
    overview: "The Shadia Coloring Poster is a digitally illustrated artwork created using Adobe Illustrator, designed to transform a real image of Shadia into a stylized, line-art composition suitable for coloring. The project focuses on simplifying complex visual details while preserving character identity, resulting in a clean, balanced, and visually engaging coloring poster." ,
    tools: "Figma",
    app: "Figma",
    role: "UX/UI Designer",
    scope: "websites",
    timeframe: "3 weeks",
  },
 "04":{
    img: "gizazoo",
    overview: "The Shadia Coloring Poster is a digitally illustrated artwork created using Adobe Illustrator, designed to transform a real image of Shadia into a stylized, line-art composition suitable for coloring. The project focuses on simplifying complex visual details while preserving character identity, resulting in a clean, balanced, and visually engaging coloring poster." ,
    tools: "Figma",
    app: "Figma",
    role: "UX/UI Designer",
    scope: "websites",
    timeframe: "3 weeks",
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

  return (
    <>
      <Nav />

   <BlurText
        text="Giza zoo website"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />  

      <section className="projectPage10">
        {/* Hero Section */}
        <div className="heroSection10">
          <span className="yearLabel10">2025</span>
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
          <div className="heroImageWrapper10">
            <img
              src={Projects.Cover_image}
              alt="World Wild Life"
              className="heroImage10"
            />
          </div>
  ))
}
        </div>

        {/* Overview Section */}
        <div className="overviewSection10">
          <div className="overviewLeft10">
            <h3 className="overviewTitle10">1- Project overview</h3>
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
            <p className="overviewText10">
              {Projects.Project_overview}
            </p>
  ))
}
            <h3 className="overviewTitle10">2- Tools i used</h3>
            <div className="toolItem10">
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
              <img src={Projects.icon} alt="Figma" className="toolIcon10" />
  ))
}
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
              <span className="toolName10">{Projects.Tools}</span>
  ))
}
            </div>
          </div>

          <div className="overviewRight10">
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => ( 
            <p className="sideItem10">
              <strong>3- My role:</strong><br />{Projects.Role}
            </p>
  ))
}
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
            <p className="sideItem10">
              <strong>4- Scope</strong><br />{Projects.Scope}
            </p>
  ))
}
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
            <p className="sideItem10">
              <strong>5- Time-frame</strong><br />{Projects.Time_frame}
            </p>
  ))
}
          </div>
        </div>

        {/* Mockups */}
        <div className="mockupsSection10">
          <BlurText
        text="Mockups"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />  

          <div className="mockupsGrid10">
            <div className="mockupImageWrapper10">
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (  
              <img
                src={Projects.Mockup}
                alt="Mockup 1"
                className="mockupImage10"
              />
  ))
}
            </div>

            <div className="mockupImageWrapper10">
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (
              <img
                src={Projects.mockup2}
                alt="Mockup 2"
                className="mockupImage10"
              />
  ))
}
            </div>
          </div>
        </div>
      </section>

<Footer />
    </>
  );
};

export default Uxdetail;
