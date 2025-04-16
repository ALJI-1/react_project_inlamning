import React from 'react'
import {Routes, Route } from "react-router";

import {HomePage} from'../pages/homepage.js';
import {AboutPage} from '../pages/aboutpage.js'; 
import {ArtistList} from '../components/artistList.js';
import  {DetailPage}  from '../pages/detailpage';

function AppRouter() {

    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artistList" exact element={<ArtistList />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
      </Routes>
    )
  }
  export default AppRouter