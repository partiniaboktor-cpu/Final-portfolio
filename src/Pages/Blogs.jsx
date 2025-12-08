import React from "react";
import "./Blogs.css";
import Nav from '../Components/Nav';

const blogsData = [
  {
    id: 1,
    title: "Recommended Designers near Nasr City",
    image: "/images/blog1.jpg"
  },
  {
    id: 2,
    title: "UX/UI and Graphic Designer",
    image: "/images/blog2.jpg"
  },
  {
    id: 3,
    title: "How to build a professional portfolio?",
    image: "/images/blog3.jpg"
  }
];

const Blogs = () => {
  return (
<>
    <Nav />
    <section className="blogs-section">
      <h1 className="blogs-title">Blogs</h1>

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
    </>
  );
};

export default Blogs;
