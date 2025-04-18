import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { coder, coder1, coder2 } from '../images';


export function AboutPage() {
  return (
    <div className="container px-4 py-4 text-center">
      <h2 className="pb-2 border-bottom">Om oss</h2>
      <p>Vi som utvecklat denna underbara service</p>
      <div id="carouselExampleCaptions" className="carousel slide" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={coder} className="d-block w-100" alt="Coder" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}
            >
              <h5>Optimus Codius</h5>
              <p>
                "Code isn't just syntax – it's the will to change the world, one line at a time."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={coder1} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}
            >
              <h5>Harry Syntax</h5>
              <p>
                "It’s not the language you code in that defines you, but the choices you make when the system crashes."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={coder2} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}
            >
              <h5>Gandalph the Coder</h5>
              <p>
                "A single line of code may seem small, yet in the right hands, it can hold back the darkness of an entire system crash."
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
