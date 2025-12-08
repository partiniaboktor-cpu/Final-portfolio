import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Scrollstack.css";

gsap.registerPlugin(ScrollTrigger);

export function ScrollStackItem({ children }) {
  return (
    <div className="scrollstack-card">
      {children}
    </div>
  );
}

export default function ScrollStack({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".scrollstack-card");

    cards.forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse"
        },
        y: -50,
        opacity: 1,
        zIndex: cards.length - i
      });
    });
  }, []);

  return (
    <div className="scrollstack-container" ref={containerRef}>
      {children}
    </div>
  );
}
