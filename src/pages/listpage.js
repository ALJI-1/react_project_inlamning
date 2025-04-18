import React from "react";
import '../css/grid.css';
import { Link } from "react-router";

// sidan som returnerar själva jsx koden för listan med grupper. ingen service här.
//Sökfält m even som tar in input och skickar den vidare (eventlifting) till artistlist. 
// preventDefault för att sidan inte ska laddas om
// eventlifting för navigeringsknapparna

export function ListPage(props) {

  const onSearch = async (e) => {
    e.preventDefault();
    const searchInput = String(document.getElementById("search").value.toLowerCase());
    if (props?.onClickSearch) props?.onClickSearch(searchInput);
  }

  const onClickPrev = (e) => {
    if (props?.onClickPrev) props?.onClickPrev(e);
  }

  const onClickNext = (e) => {
    if (props?.onClickNext) props?.onClickNext(e);
  }

  return (
    <>

      <div className="container px-4 py-4" id="list-of-groups">
        <h2 className="pb-2 border-bottom">List of Music groups</h2>
        <h4 className="text-center my-4">Sök efter ditt favoritband</h4>
      </div>

      <div className="container mb-4">
        <form>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-2">
              <input className="form-control" id="search" placeholder="ex. 'Stones'" />
            </div>
            <div className="col-md-2 mb-2">
              <button className="btn btn-outline-success w-100" onClick={onSearch}>Sök</button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        {
          props?.initialData?.map((row, idx) => (
            <div key={row.id} data-rowid={row.musicGroupId} className="row mb-2 justify-content-center">
              <div 
                className="col-md-8 themed-grid-col d-flex justify-content-between align-items-center bg-white p-2 border rounded" 
                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                <span className="text-truncate" style={{ maxWidth: '70%' }}>{row?.name}</span>
                <span>
                  <Link
                    to={`/detailpage/${row.musicGroupId}`} 
                    className="btn btn-sm btn-outline-primary"
                  >
                    Detaljer
                  </Link>
                </span>
              </div>
            </div>
          ))
        }
      </div>

      <nav aria-label="List pagination" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" aria-label="Previous" onClick={onClickPrev}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">
              sida {props?.currentPageNr + 1} av {props?.maxPageNr}
            </span>
          </li>
          <li className="page-item">
            <button className="page-link" aria-label="Next" onClick={onClickNext}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}