import React, { useEffect, useState } from "react";
import "../Components/Hero.css";
import myImg from "../Images/Profile.png";
import BlurText from "../Animations/BlurText";
import DecryptedText from "../Animations/DecryptedText";
import star from "../Images/star.svg";
import { supabase } from "../Supabase";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [Hero, setHero] = useState([]);

  useEffect(() => {
    const getAllHeroAPI = async () => {
      const { data } = await supabase.from("Hero").select("*");
      setHero(data);
      setLoading(false);
    };

    getAllHeroAPI();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Hero animation completed");
  };

  if (loading) return null;

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
{Hero
  .filter(Hero => Hero.id === 1)
  .map(Hero => (  
          <img src={Hero.Hero_image} alt="me" className="hero-img" />
  ))
}
          <div className="text-section">
            <h2 className="role">UX/UI Designer</h2>
            <h3 className="role2">& Graphic Designer</h3>
          </div>
        </div>

        <img className="star2" src={star} alt="" />

        <DecryptedText
          text="Bringing your product’s future glow-up from imagination to interface."
          speed={50}
          maxIterations={20}
        />
      </div>
    </div>
  );
};

export default Hero;
