import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Categories from './Pages/Categories';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Blogsdetail from './Pages/Blogsdetail';
import Graphic from './Pages/Graphic';

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

      </Routes>
    </BrowserRouter>
    
    
    
    </> );
}
 
export default RoutingApp;