import React from 'react'
import { Link } from 'react-router';

// footer komponent som kommer från mitt js-projekt. Lagt till Link, stylat de med botstrap och effeker på knapparna 
  // Link sköter hoppen mellan sidorna med nyckelorden Link och to=

export function Footer() {

  return (
    <div className="container px-4 py-4" id="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <p className="col-md-4 mb-0 text-muted">© 2024 Company, Inc</p>
        <p className="col-md-4 mb-0 text-muted">
          Creator: Snoop D.O. Double API<br />
          aka: Albin Ingelsson
        </p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link style={{ textDecoration: 'none' }} to="/artistList">
              <button
                className="btn btn-link nav-link px-2 text-muted hover-effect"
                style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'blue';
                  e.target.style.fontSize = '1.2rem';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'inherit';
                  e.target.style.fontSize = '1rem';
                }}
              >
                Music List
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none' }} to="/about">
              <button
                className="btn btn-link nav-link px-2 text-muted hover-effect"
                style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'blue';
                  e.target.style.fontSize = '1.2rem';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'inherit';
                  e.target.style.fontSize = '1rem';
                }}
              >
                About
              </button>
            </Link>
          </li>
        </ul>
        
      </footer>
    </div>
  );
}
