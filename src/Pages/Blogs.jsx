import React from "react";
import "./Blogs.css";
import Nav from '../Components/Nav';
import BlurText from "../Animations/BlurText";
import Footer from "../Components/Footer";
import blog1 from '../Images/blog1.png'
import blog2 from '../Images/blog2.png'
import blog3 from '../Images/blog3.png'
import star from '../Images/star.svg'

const blogsData = [
  {
    id: 1,
    title: "Recommended Designers near Nasr City",
    image: blog1
  },
  {
    id: 2,
    title: "UX/UI and Graphic Designer",
    image: blog2
  },
  {
    id: 3,
    title: "How to build a professional portfolio?",
    image: blog3
  }
];
const Blogs = () => {

    const handleAnimationComplete = () => {
    console.log("Animation finished");
  };
  return (
<>
    <Nav />
    <section className="blogs-section">
      <BlurText
        text="Blogs"
        delay={200}
        animateBy="letters"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="blogs-grid">
        {blogsData.map((blog, index) => (
          <div
            className={`blog-card ${index === 2 ? "large" : ""}`}
            key={blog.id}
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="overlay"></div>

            <div className="icon-bubble">💬</div>

            <h2 className="blog-title">{blog.title}</h2>

            <button className="read-btn">Read more</button>
          </div>
        ))}
      </div>
    </section>

    <Footer />
    </>
  );
};

export default Blogs;
