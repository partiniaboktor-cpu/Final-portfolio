import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Categories from './Pages/Categories';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Blogsdetail from './Pages/Blogsdetail';
import Graphic from './Pages/Graphic';
import Test from './Pages/Test';
import Graphicdetail from './Pages/Graphicdetail';

const RoutingApp = () => {
    return ( <>
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogsdetail' element={<Blogsdetail />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/graphicdetail1' element={<Graphicdetail />} />
        <Route path='/test' element={<Test />} />

      </Routes>
    </BrowserRouter>
    
    
    
    </> );
}
 
export default RoutingApp;