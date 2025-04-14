import React from "react";
import '../css/grid.css';


export function CreateList(props) {
    const onClickHeader = (e) => 
      {
        console.log("onClickHeader executed");
        if (props?.onClickHeader) props?.onClickHeader(e);
      }
    
      const onClickRow = (e) => 
        {
          console.log("onClickRow executed");
  
          //pass on the id in the event lifting
          e.rowid = e.currentTarget.dataset.rowid;
          if (props?.onClickHeader) props?.onClickRow(e);
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
        <h1>Adding pagination</h1>
  
        <div className="row mb-2 text-center" onClick={onClickHeader}>
        { 
        props?.headers?.map((item, idx) => 
          <>
          <div key={idx} className="col-md-2 themed-grid-head-col">{item}</div>
          </>
          )
        }
        </div>
        {
          props?.initialData?.map((row, idx) => 
            //data-rowid={row.id}
          <div key={row.id} data-rowid={row.artistId} className="row mb-2 text-center" onClick={onClickRow}>
            <div className="col-md-2 themed-grid-col">{row?.firstName}</div>
            <div className="col-md-2 themed-grid-col">{row?.lastName}</div>
            <div className="col-md-2 themed-grid-col">{row?.birthDay?.slice(0, 10)|| "empty.."} </div> {/* slice för att formatera */}
          </div> )
        }
  
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
      </>)}
  