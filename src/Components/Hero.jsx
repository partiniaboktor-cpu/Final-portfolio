import React, { useEffect, useState } from "react";
import "../Components/Hero.css";
import myImg from "../Images/Profile.png";
import BlurText from "../Animations/BlurText";
import star from "../Images/star.svg";
import DecryptedText from "../Animations/DecryptedText";
import { supabase } from "../Supabase";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [Hero, setHero] = useState([]);

  useEffect(() => {
    async function getAllHeroAPI() {
      const { data } = await supabase.from("Hero").select("*");
      setHero(data);
      setLoading(false);
    }
    getAllHeroAPI();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="hero-container">
      <div className="hero-content">

{Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => ( 
        <BlurText
          text={Hero.Hero_title}
          delay={200}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
 ))
}

        <div className="hero-details">
          <div className="backportfolio">
  {Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => (  
          <img src={Hero.Hero_image} alt="me" className="hero-img" />
  ))
}
            {/* ✅ NOT REMOVED */}
{Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => (  
            <div className="rowportfolio">
              <h1 className="portfolioname">{Hero.texts}</h1>
              <h1 className="portfolioname">{Hero.texts}</h1>
              <h1 className="portfolioname">{Hero.texts}</h1>
            </div>
  ))
}
          </div>
{Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => (  
          <div className="text-section">
            <h2 className="role">{Hero.type}</h2>
            <h3 className="role2">{Hero.type2}</h3>
          </div>
  ))
}
        </div>

        <img className="star2" src={star} alt="" />
{Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => ( 
        <DecryptedText
          text={Hero.caption}
          speed={50}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
  ))
}
      </div>
    </div>
  );
};

export default Hero;
