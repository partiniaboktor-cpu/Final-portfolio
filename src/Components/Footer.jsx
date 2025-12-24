import React, { useEffect, useState } from "react";
import './Footer.css';
import BlurText from "../Animations/BlurText";
import { supabase } from "../Supabase";


const Footer = () => {
     const handleAnimationComplete = () => {
    console.log("Animation finished");
  };

  const [loading, setLoading] = useState(true);
  const [footer, setfooter] = useState("") ;
  
  
  useEffect(()=>{
  
   async function getAllfooterAPI(){
    const res = await supabase.from("footer").select("*");
    setfooter(res.data);
    // console.log(res.data);
      setLoading(false);
  }
  getAllfooterAPI();
  
  },[]);
  
  if (loading) return <p>Loading...</p>;

    return ( <>
    
    <section className="heros-contact">
      <div className="heros-left">
{footer
  .filter(footer => footer.id === 1)
  .map(footer => (
        <p className="descriptions">
          {footer.bio}
        </p>
  ))
}
{footer
  .filter(footer => footer.id === 1)
  .map(footer => (
        <BlurText
  text={footer.name}
  delay={200}
  animateBy="letters"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
    ))
}      
      </div>

      <div className="heros-right">
{footer
  .filter(footer => footer.id === 1)
  .map(footer => (
        <h3>{footer.info}</h3>
    ))
} 
        <ul>
{footer
  .filter(footer => footer.id === 2)
  .map(footer => (
          <li>{footer.info}</li>
    ))
} 
{footer
  .filter(footer => footer.id === 3)
  .map(footer => (
          <li>{footer.info}</li>
    ))
} 

         {footer
  .filter(footer => footer.id === 4)
  .map(footer => (
          <li>{footer.info}</li>
    ))
} 
        </ul>
      </div>
    </section>

    
    </> );
}
 
export default Footer;