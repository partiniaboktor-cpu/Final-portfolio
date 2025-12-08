import React from "react";
import "./Blogsdetail.css";
import Nav from '../Components/Nav' ;
import Footer from "../Components/Footer";
import blog1 from '../Images/blog1.png'

const BlogDetail = () => {
  return (


    <>
<Nav />
    <section className="blog-detail-section">
      <h1 className="blogs-title">Blogs</h1>

      <div
        className="blog-detail-card"
style={{ backgroundImage: `url(${blog1})` }}
      >
        <div className="overlay"></div>

        <div className="content">
          <span className="icon-bubble">💬</span>

          <h2 className="detail-title">
            Recommended Designers near Nasr City
          </h2>

          <p className="detail-text">
            From my point of view Nasr City, a bustling district in Cairo which
            have high percentage of being UX/UI designer. These professionals
            offers works as freelance or agencies or startup, part-time and
            full-time job for their field. With Cairo's growing tech scene, UI
            designers here blend local cultural insights with global design
            trends, making them adept at creating interfaces for apps, websites,
            and software tailored to diverse audiences.
            <br /><br />
            Most UX/UI Designers can have many skill from their field such as
            wireframing, prototyping, user research, enabling them to design
            responsive layouts that prioritize user experience. Also, other
            tools for skills, such as Adobe Illustrator, Adobe Premiere, Adobe
            Photoshop, Figma, FigJam, After Effects, Blender. The more the
            skills the more the professional designer.
          </p>

        </div>
      </div>
    </section>

    <Footer />
      </>);
};

export default BlogDetail;
