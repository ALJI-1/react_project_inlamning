import React from 'react'
import { Link } from 'react-router';

export  function Footer() {


  return (
    <div className="container px-4 py-4" id="footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <p className="col-md-4 mb-0 text-muted">© 2024 Company, Inc</p>
        <p className="col-md-4 mb-0 text-muted">Creator: Snoop D.O. Double API<br />aka: Albin Ingelsson</p>

        <ul className="nav col-md-4 justify-content-end"> 

            <li className="nav-item">
            <Link style={{textDecoration: 'none'}} to="/artistList">
                <button className="btn btn-link nav-link px-2 text-muted" >Music List</button>
            </Link>
            </li>
            <li className="nav-item">
            <Link style={{textDecoration: 'none'}} to="/about">
                <button className="btn btn-link nav-link px-2 text-muted">About</button>
            </Link>
            </li>

        </ul>

        </footer>
    </div>
  )
}
