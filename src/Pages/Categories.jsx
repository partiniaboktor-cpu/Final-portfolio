import React from "react";
import "./Categories.css";
import WhiteNav from "../Components/WhiteNav";
import ScrollStack from "../Animations/Scrollstack"; // ✅ Only default export
import Footer from "../Components/Footer";
import TiltedCard from '../Animations/Tiltedcard';
import InfiniteMenu from '../Animations/InfiniteMenu'
import coding from '../Images/webdeveloper.svg'
import ux from '../Images/ux.svg'
import graphic from '../Images/graphic design.svg'
import Photography from '../Images/photography.svg'
import graphics from '../Images/graphic.png'
import Ux from '../Images/ux/ui.png'
import photography from '../Images/photography.png'
import web from '../Images/web programming.png'


const Categories = () => {

 const items = [
  {
    image: coding ,
    // link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: ux ,
    // link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: graphic ,
    // link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: Photography,
    // link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

  return (
    <>
      <WhiteNav />



<div style={{  position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
 

<div className="category-cards-sec">

  <div className="card-text">
    <div className="img-wrapper">
      <img src={graphics} alt="graphic" />
      <div className="overlay">View projects →</div>
    </div>
    <p className="name-text">Graphic design</p>
  </div>

  <div className="card-text">
    <div className="img-wrapper">
      <img src={Ux} alt="ux/ui" />
      <div className="overlay">View projects →</div>
    </div>
    <p className="name-text">UX/UI Design</p>
  </div>

  <div className="card-text">
    <div className="img-wrapper">
      <img src={photography} alt="photography" />
      <div className="overlay">View projects →</div>
    </div>
    <p className="name-text">Photography</p>
  </div>

  <div className="card-text">
    <div className="img-wrapper">
      <img src={web} alt="web" />
      <div className="overlay">View projects →</div>
    </div>
    <p className="name-text">Web developer</p>
  </div>

</div>





      <Footer />
    </>
  );
};

export default Categories;
