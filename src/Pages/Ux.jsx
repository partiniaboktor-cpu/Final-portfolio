import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import BlurText from "../Animations/BlurText";
import zooImg from '../Images/ux/giza zoo.png';
import serumImg from '../Images/ux/Offering web 1.png';
import furnitureImg from '../Images/ux/furniture.png';
import '../Pages/Ux.css';
import Footer from "../Components/Footer";
import customImg from '../Images/custom.png'
import { supabase } from "../Supabase";
import { Link } from "react-router-dom";
import Uxdetail from "./Uxdetail";

const UX = () => {
   
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
    
    <Nav />

      <BlurText
        text="UX/UI  Design"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />  
    
 <section className="portfolioContainer9">

      {/* Project 1 */}
      <div className="projectCard9">
        <span className="projectYear9">2025</span>
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (
        <div className="projectImageWrapper9">
          <img
            src= {Projects.Cover_image}
            alt="Giza Zoo Website"
            className="projectImage9"
          />
        </div>
  ))
}

        <div className="projectFooter9">
{Projects
  .filter(Projects => Projects.id === 5)
  .map(Projects => (           
<Link to="/Uxdetail">
  <p className="projectTitle9">{Projects.title}</p>
</Link>
  ))
}
<Link to="/Uxdetail">
          <span className="projectLink9">
            View detail <span className="arrow9">→</span>
          </span>
</Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="projectCard9">
        <span className="projectYear9">2025</span>

{Projects
  .filter(Projects => Projects.id === 6)
  .map(Projects => (
        <div className="projectImageWrapper9">
          <img
            src={Projects.Cover_image}
            alt="Offering Page Website"
            className="projectImage9"
          />
        </div>
  ))
}
  
        <div className="projectFooter9">
{Projects
  .filter(Projects => Projects.id === 6)
  .map(Projects => (
          <p className="projectTitle9">{Projects.title}</p>
  ))
}
          <span className="projectLink9">
            View detail <span className="arrow9">→</span>
          </span>
        </div>
      </div>

      {/* Project 3 */}
      <div className="projectCard9">
        <span className="projectYear9">2025</span>
{Projects
  .filter(Projects => Projects.id === 7)
  .map(Projects => (
        <div className="projectImageWrapper9">
          <img
            src={Projects.Cover_image}
            alt="Furniture Website"
            className="projectImage9"
          />
        </div>
  ))
}
{Projects
  .filter(Projects => Projects.id === 7)
  .map(Projects => (
        <div className="projectFooter9">
          <p className="projectTitle9">{Projects.title}</p>
          <span className="projectLink9">
            View detail <span className="arrow9">→</span>
          </span>
        </div>
  ))
}
      </div>

    </section>

 {/* Project 4 */}
      <div className="projectCard9">
        <span className="projectYear9">2025</span>
{Projects
  .filter(Projects => Projects.id === 8)
  .map(Projects => (
        <div className="projectImageWrapper9">
          <img
            src={Projects.Cover_image}
            alt="Custom shop Website"
            className="projectImage9"
          />
        </div>
  ))
}
{Projects
  .filter(Projects => Projects.id === 8)
  .map(Projects => (
        <div className="projectFooter9">
          <p className="projectTitle9">{Projects.title}</p>
          <span className="projectLink9">
            View detail <span className="arrow9">→</span>
          </span>
        </div>
  ))
}
      </div>

    
<Footer />
    
    
    </> );
}
 
export default UX;