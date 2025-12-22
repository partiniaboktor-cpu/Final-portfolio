import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import "./Home.css";
import BlurText from "../Animations/BlurText";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import { supabase } from "../Supabase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const getAllHeroAPI = async () => {
      const { data } = await supabase.from("Hero").select("*");
      setHeroData(data);
      setLoading(false);
    };

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

      <div className="whoami-container">
        <BlurText
          text="Who am I?"
          delay={200}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
