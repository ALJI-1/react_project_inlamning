import React, {useState, useEffect} from 'react'
import '../css/grid.css';

import musicService from '../services/music-group-service';
import { CreateList } from '../pages/listpage';

const tableHeaders = ["first name", "last name", "birthday"];

export function ArtistList(props) {

  const _pSize = props.pageSize || 5;

  const [pageSize, setPageSize] = useState(_pSize);
  const [currentPageNr, setCurrentPageNr] = useState(0);
  const [maxPageNr, setMaxPageNr] = useState(0);
  const [dataPage, setDataPage] = useState([]);

  useEffect(
    () => {

      // const d = [..._persons.slice(currentPageNr * pageSize, currentPageNr * pageSize + pageSize)];
      // setDataPage(d);

      (async() => {
        const service = new musicService("https://seido-webservice-307d89e1f16a.azurewebsites.net/api");

        const artists = await service.readArtistsAsync(currentPageNr, true, null, pageSize); 

        console.log(`${artists.pageItems[0].firstName} ${artists.pageItems[0].lastName} ${artists.pageItems[0]?.birthDay}`);

        console.log (artists.pageCount);
        setMaxPageNr(artists.pageCount);
        setDataPage(artists.pageItems);
        

      })();
    
    }, [pageSize, currentPageNr, maxPageNr]);


  const onClickHeader = (e) => 
    {
      console.log(`onClickHeader`);
    }

  const onClickRow = (e) => 
    {
      console.log(`onClickRow rowitemid: ${e.rowid}`);
    }

  const onClickPrev = (e) => 
    {
      console.log(`onClickPrev`);

      if (currentPageNr > 0) {
         setCurrentPageNr(currentPageNr - 1);
      }
    }

  const onClickNext = (e) => 
    {
      console.log(`onClickNext`);

      if (currentPageNr < maxPageNr-1) {
        setCurrentPageNr(currentPageNr + 1);
      }
    }

    return (
    <>
      <div class="container px-4 py-4" id="list-of-groups">
          <h2 class="pb-2 border-bottom">List of Music bands</h2>
      
          <p>Below are some of the worlds most famous Music bands.</p>

      
      <CreateList headers={tableHeaders} initialData={dataPage} 
            onClickHeader={onClickHeader} onClickRow={onClickRow}
            onClickPrev={onClickPrev} onClickNext={onClickNext}/>
      </div>
    </>
  );}

