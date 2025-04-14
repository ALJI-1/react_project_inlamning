import React from 'react'

export  function Footer() {
  return (
    <div className="container px-4 py-4" id="footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>
        <p className="col-md-4 mb-0 text-body-secondary">Creator: Snoop D.O. Double API<br />aka: Albin Ingelsson</p>

        <ul className="nav col-md-4 justify-content-end"> 
            <li className="nav-item"><a className="nav-link" href="ListPage.html">Music List</a></li>
            <li className="nav-item"><a className="nav-link" href="index.html"  aria-current="page">About</a></li>
        </ul>

        </footer>
    </div>
  )
}
