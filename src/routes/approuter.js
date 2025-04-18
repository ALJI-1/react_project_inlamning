import React from 'react'
import {Routes, Route } from "react-router";

import {HomePage} from'../pages/homepage.js';
import {AboutPage} from '../pages/aboutpage.js'; 
import {ArtistList} from '../components/artistList.js';
import {DetailPage}  from '../pages/detailpage';
import {DailyMusic} from '../pages/dailymusic';

// Router. sköter hoppen mellan de sidorna som finns. om ingen link matchar så går den till hemsidan.
// detailpage får med sig en "parameter" som är ett grupp-id. De går inte att hoppa till detaipage utan att ha ett 
// id med sig så länken i headern funkar inte med genom detaljknappen i listan med grupper kommer man dit

function AppRouter() {

    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artistList" element={<ArtistList />} />
        <Route path="/detailpage/:id" exact element={<DetailPage />} />
        <Route path="/dailymusic" element={<DailyMusic />} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
    )
  }
  export default AppRouter