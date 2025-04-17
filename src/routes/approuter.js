import React from 'react'
import {Routes, Route } from "react-router";

import {HomePage} from'../pages/homepage.js';
import {AboutPage} from '../pages/aboutpage.js'; 
import {ArtistList} from '../components/artistList.js';
import {DetailPage}  from '../pages/detailpage';
import {DailyMusic} from '../pages/dailymusic';

function AppRouter() {

    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artistList" exact element={<ArtistList />} />
        <Route path="/detailpage/:id" exact element={<DetailPage />} />
        <Route path="/dailymusic" element={<DailyMusic />} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
    )
  }
  export default AppRouter