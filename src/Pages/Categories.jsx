import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Categories.css";
import WhiteNav from "../Components/WhiteNav";
import Footer from "../Components/Footer";
import InfiniteMenu from '../Animations/InfiniteMenu'
import coding from '../Images/webdeveloper.svg'
import ux from '../Images/ux.svg'
import graphic from '../Images/graphic design.svg'
import Photography from '../Images/photography.svg'
import graphics from '../Images/graphic.png'
import Ux from '../Images/ux/ui.png'
import photography from '../Images/photography.png'
import web from '../Images/web programming.png'
import { supabase } from "../Supabase";


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




const [loading, setLoading] = useState(true);
const [Categories, setCategories] = useState("") ;


useEffect(()=>{

 async function getAllCategoriesAPI(){
  const res = await supabase.from("Categories").select("*");
  setCategories(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllCategoriesAPI();

},[]);

if (loading) return <p>Loading...</p>;

  return (
    <>
      <WhiteNav />



<div style={{  position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
 

<div className="category-cards-sec">

<Link className="graphic-link" to="/graphic">
  <div className="card-text">
    <div className="img-wrapper">
{Categories
  .filter(Categories => Categories.id === 1)
  .map(Categories => (
      <img src={Categories.image} alt="graphic" />
  ))
}
    </div>
{Categories
  .filter(Categories => Categories.id === 1)
  .map(Categories => (
    <p className="name-text">{Categories.Name}</p>
  ))
}
  </div>
</Link>

  <Link className="graphic-link" to="/Ux">
  <div className="card-text">
    <div className="img-wrapper">
{Categories
  .filter(Categories => Categories.id === 2)
  .map(Categories => (
      <img src={Categories.image} alt="ux/ui" />
  ))
}
    </div>
{Categories
  .filter(Categories => Categories.id === 2)
  .map(Categories => (
    <p className="name-text">{Categories.Name}</p>
  ))
}
  </div>
  </Link>

    <Link className="graphic-link" to="/photography">
  <div className="card-text">
    <div className="img-wrapper">
{Categories
  .filter(Categories => Categories.id === 3)
  .map(Categories => (
      <img src={Categories.image} alt="photography" />
  ))
}
    </div>
{Categories
  .filter(Categories => Categories.id === 3)
  .map(Categories => (
    <p className="name-text">{Categories.Name}</p>
  ))
}
  </div>
   </Link>


  <div className="card-text">
    <div className="img-wrapper">
 {Categories
  .filter(Categories => Categories.id === 4)
  .map(Categories => (     
      <img src={Categories.image} alt="web" />
  ))
}
    </div>
{Categories
  .filter(Categories => Categories.id === 4)
  .map(Categories => (
    <p className="name-text">{Categories.Name}</p>
  ))
}
  </div>

</div>





      <Footer />
    </>
  );
};

export default Categories;
