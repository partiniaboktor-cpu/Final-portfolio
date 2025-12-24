import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Categories from './Pages/Categories';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Blogsdetail from './Pages/Blogsdetail';
import Graphic from './Pages/Graphic';
import Graphicdetail from './Pages/Graphicdetail';
import Test from './Pages/Test';
import UX from './Pages/Ux';
import Uxdetail from './Pages/Uxdetail';
import Photography from './Pages/Photography';

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogsdetail' element={<Blogsdetail />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/graphic/:id' element={<Graphicdetail />} />
        <Route path='/test' element={<Test />} />
        <Route path='/ux' element={<UX />} />
        <Route path='/ux/:id' element={<Uxdetail />} />
        <Route path='/photography' element={<Photography />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
