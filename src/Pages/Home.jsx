import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import "./Home.css";
import myimg2 from "../Images/myimg2.svg";
import BlurText from "../Animations/BlurText";
import figma from "../Images/figma.svg";
import ai from "../Images/illustartor.svg";
import AE from "../Images/aftereffects.svg";
import ps from "../Images/ps.svg";
import vs from "../Images/vcode.svg";
import js from "../Images/js.svg";
import one from "../Images/one.svg";
import two from "../Images/two.svg";
import three from "../Images/three.svg";
import four from "../Images/four.svg";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import { supabase } from "../Supabase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    async function getAllHeroAPI() {
      const { data } = await supabase.from("Hero").select("*");
      setHeroData(data || []);
      setLoading(false);
    }
    getAllHeroAPI();
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Nav />
      <Hero />

      {/* ✅ YOU ASKED NOT TO REMOVE THIS — IT IS UNTOUCHED */}
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
            <img src={ps} alt="Photoshop" />
            <img src={vs} alt="VS Code" />
            <img src={js} alt="JavaScript" />
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

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
