import React from 'react'
import {useState, useEffect } from 'react';
import musicService from '../services/music-group-service';
import '../css/grid.css';
import { useParams } from 'react-router';

export function DetailPage() {

  const tableHeaders = ["Band", "Genre", "Etableringsår"];
  const { id } = useParams();
  const [wapiData, setWapiData] = useState(null);

  useEffect(() => {
    (async () => {
      const service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      const data = await service.readMusicGroupAsync(id, false);
      setWapiData(data);
    })();
  }, []);

  return (
    <>
      <div className="row text-center justify-content-center">
        {tableHeaders.map((item, index) => (
          <div key={index} className="col-md-3 themed-grid-head-col mb-2">{item}</div> 
        ))}
      </div>

      <div className="row mb-2 text-center justify-content-center">
        <div className="col-md-3 themed-grid-col d-flex justify-content-center align-items-center mb-2">{wapiData?.name}</div>
        <div className="col-md-3 themed-grid-col d-flex justify-content-center align-items-center mb-2">{wapiData?.strGenre}</div>
        <div className="col-md-3 themed-grid-col d-flex justify-content-center align-items-center mb-2">{wapiData?.establishedYear}</div>
      </div>

      <div className="row mb-2 justify-content-center">
        <div className="col-12 col-md-6 text-center mb-3">
          <h3 className="mb-3">Albums</h3>
          <div className="d-flex flex-column align-items-stretch gap-2">
            {wapiData?.albums?.map((album, index) => (
              <div key={index} className="themed-grid-col d-flex justify-content-center align-items-center text-center w-100">
                {album.name}
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <h3 className="mb-3">Artists</h3>
          <div className="d-flex flex-column align-items-stretch gap-2">
            {wapiData?.artists?.map((artist, index) => (
              <div key={index} className="themed-grid-col d-flex justify-content-center align-items-center text-center w-100">
                {artist.firstName} {artist.lastName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}