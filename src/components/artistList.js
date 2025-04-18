import React, {useState, useEffect} from 'react'
import '../css/grid.css';
import musicService from '../services/music-group-service';
import { ListPage } from '../pages/listpage';

//Komponent för att kommunciera med service och hämta data asynkront. 
//States på de flesta variabler för att hålla koll om sidan behöver renderas om
// event handlers för knappar och sökfält
// returnerar en komponent som ritar ut data i browsern. skickar med datan,event,variablar som props 

export function ArtistList(props) {

  const _pSize = 10;

  const [pageSize, setPageSize] = useState(_pSize);
  const [currentPageNr, setCurrentPageNr] = useState(0);
  const [maxPageNr, setMaxPageNr] = useState(0);
  const [dataPage, setDataPage] = useState([]);
  const [searchFilter, setSearchFilter] = useState(null);

  useEffect(() => {
      (async() => {
        const service = new musicService("https://seido-webservice-307d89e1f16a.azurewebsites.net/api");
        const artists = await service.readMusicGroupsAsync(currentPageNr, true, searchFilter, pageSize); 
 
        setMaxPageNr(artists.pageCount);
        setDataPage(artists.pageItems);
      })();
    
    }, [pageSize, currentPageNr, maxPageNr, searchFilter]);

    const onClickSearch = async (e) => {
      setSearchFilter(e);
    }

  const onClickPrev = (e) => 
    {
      if (currentPageNr > 0) {
         setCurrentPageNr(currentPageNr - 1);
      }
    }

  const onClickNext = (e) => 
    {
      if (currentPageNr < maxPageNr-1) {
        setCurrentPageNr(currentPageNr + 1);
      }
    }

    return (
    <>
      <ListPage headers={props?.headers} initialData={dataPage} 
              currentPageNr={currentPageNr} maxPageNr={maxPageNr}
              onClickSearch={onClickSearch}
              onClickPrev={onClickPrev} onClickNext={onClickNext}/>
    </>
  );}

