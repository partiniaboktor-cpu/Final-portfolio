"use client";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";
import { useRef } from "react";
import "./Parallex.css";
import shadia from '../Images/shadia.png'
import fontposter from '../Images/fontposter.png'

// Custom hook for parallax effect
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// Image component
function Image({ src, label }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <>
        <section className="img-container">
            <div ref={ref}>
                <img src={shadia} alt={label} />
            </div>

            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                {label}
            </motion.h2>
        </section>

  <section className="img-container">
            <div ref={ref}>
                <img src={fontposter} alt={label} />
            </div>

            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                {label}
            </motion.h2>
        </section>



</>
    );
}

// Main Parallax component
export default function Parallax() {
    // List all images here
    const images = [
        "shadia.jpg",
        "fontposter.jpg",
        "nyc.jpg",
        "tokyo.jpg",
        "berlin.jpg"
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="example">
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={`/photos/cityscape/${img}`}
                    label={`#${index + 1}`}
                />
            ))}

            <motion.div className="progress" style={{ scaleX }} />
        </div>
    );
}
