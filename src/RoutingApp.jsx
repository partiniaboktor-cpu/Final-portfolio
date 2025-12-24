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
import Uxdetail1 from './Pages/Uxdetail1';
import Photography from './Pages/Photography';
import Uxdetail2 from './Pages/Uxdetail2';
import Uxdetail3 from './Pages/Uxdetail3';
import Uxdetail4 from './Pages/Uxdetail4';
import Photography1 from './Pages/Photography1';
import Photography2 from './Pages/Photography2';
import Photography3 from './Pages/Photography3';
import Photography4 from './Pages/Photography4';

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
        <Route path='/uxdetail1' element={<Uxdetail1 />} />
        <Route path='/uxdetail2' element={<Uxdetail2 />} />
        <Route path='/uxdetail3' element={<Uxdetail3 />} />
        <Route path='/uxdetail4' element={<Uxdetail4 />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='/photography1' element={<Photography1 />} />
        <Route path='/photography2' element={<Photography2 />} />
        <Route path='/photography3' element={<Photography3 />} />
        <Route path='/photography4' element={<Photography4 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
