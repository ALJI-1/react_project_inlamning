import React from "react";
import '../css/grid.css';
import { useState, useEffect } from "react";



export function CreateList(props) {

  const onSearch = async (e) => {
      e.preventDefault();
      const searchInput = String(document.getElementById("search").value.toLowerCase()); // Corrected method casing
      if (props?.onClickSearch) props?.onClickSearch(searchInput);
    }

  const onClickDetails = (e) => 
  {
    console.log("onClickDetails executed");

    //pass on the id in the event lifting
    e.rowid = e.currentTarget.dataset.rowid;
    if (props?.onClickHeader) props?.onClickDetails(e);
  }

  const onClickPrev = (e) => 
  {
    console.log(`onClickPrev`);
    if (props?.onClickPrev) props?.onClickPrev(e);
  }

  const onClickNext = (e) => 
  {
    console.log(`onClickNext`);
    if (props?.onClickNext) props?.onClickNext(e);
  }
        
        
        
      return (
      <>
        <h4>Sök efter ditt favoritband</h4>
  
        <div>
          <form>
            {/* <input id='search' placeholder="search" defaultValue={searchFilter}/>
            <button className="mb-2"onClick={onSearch} type="button">Sök</button> */}
            <div className="row mb-2 text-center">
              <div className="row mb-1 text-center">

                  <div className="col-md-6 ">
                      <input className="form-control" id="search" placeholder="ex. 'Stones'"/>
                  </div>

                  <div className="col-md-2 ">
                      <button className="btn btn-outline-success" onClick={onSearch}>Sök</button>
                  </div>

              </div>
          </div>

          </form>
        </div>
        
        <div className="row mb-2 text-center">
          <div className="col-md-5 themed-grid-head-col">{props?.headers[0]}</div>
        </div>

        {
          props?.initialData?.map((row, idx) => (
            <div key={row.id} data-rowid={row.artistId} className="row mb-2 text-center">
              <div className="col-md-5 themed-grid-col d-flex justify-content-between align-items-center">
                {row?.name}
                <span>
                  <button onClick={onClickDetails} type="button">Detaljer</button>
                </span>
              </div>
            </div>
          ))
        }

        {/* {
          props?.initialData?.map((row, idx) => 
          <div key={row.id} data-rowid={row.artistId} className="row mb-2 text-center" >
            <div className="col-md-5 themed-grid-col d-flex justify-content-between align-items-center">{row?.name}<span><button  onClick={onClickDetails} type="button">Detaljer</button></span></div>
          </div> )
        } */}
  
        <nav aria-label="List pagination">
        <ul className="pagination">
          <li className="page-item">
          <button className="page-link" aria-label="Previous" onClick={onClickPrev}>
            <span aria-hidden="true">&laquo;</span>
          </button>
          </li>
          <li className="page-item">
          <button className="page-link" aria-label="Next" onClick={onClickNext}>
            <span aria-hidden="true">&raquo;</span>
          </button>
          </li>
        </ul>
        </nav>
      </>)
      }
  