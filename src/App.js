import logo from './logo.svg';
import './App.css';
import {Homepage} from'./pages/homepage';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {ArtistList} from './components/artistList';
import {Detailpage} from './pages/detailpage';
import musicService from './services/music-group-service';
import { useState, useEffect } from 'react';

function App() {

  const [groupsOfArtists, setGroupsOfArtists] = useState([]);
  const tableHeaders = ["Band", "Genre", "Etableringsår", "Medlemmar"];

  useEffect(() => {
  (async() => {
    const service = new musicService("https://seido-webservice-307d89e1f16a.azurewebsites.net/api");
  const artists = await service.readMusicGroupsAsync(0, false, null, 10); 
    setGroupsOfArtists(artists.pageItems);
})();}
,[]);
  
  return (
    <>
      {/* <Header/>
      <Homepage/>
      <Footer/> */}

      <Header/>
      <ArtistList headers={tableHeaders}/>
      <Footer/>

      <Header/>
      <Detailpage headers={tableHeaders} groups = {groupsOfArtists} />
      <Footer/>
    </>
  );
}

export default App;
