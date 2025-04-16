import React, {useState, useEffect} from 'react'
import '../css/grid.css';
import musicService from '../services/music-group-service';
import { ListPage } from '../pages/listpage';
import { useNavigate} from 'react-router';



export function ArtistList(props) {

  const _pSize = 10;

  const [pageSize, setPageSize] = useState(_pSize);
  const [currentPageNr, setCurrentPageNr] = useState(0);
  const [maxPageNr, setMaxPageNr] = useState(0);
  const [dataPage, setDataPage] = useState([]);
  const [searchFilter, setSearchFilter] = useState(null);
  const navigate = useNavigate();
 

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
      console.log(`onClickSearch: ${e}`);
    }

  const onClickDetails = (e) => 
    {

      console.log(e.rowid);
      navigate(`/detailpage/${e.rowid}`);

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


      
      <ListPage headers={props?.headers} initialData={dataPage} 
              currentPageNr={currentPageNr} maxPageNr={maxPageNr}
              onClickDetails={onClickDetails} onClickSearch={onClickSearch}
              onClickPrev={onClickPrev} onClickNext={onClickNext}/>
      </div>
    </>
  );}

