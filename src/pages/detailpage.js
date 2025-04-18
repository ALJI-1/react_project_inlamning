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
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detaljer för {wapiData?.name}</h1>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header text-center">
              <div className="row">
                {tableHeaders.map((item, index) => (
                  <div key={index} className="col font-weight-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col">{wapiData?.name}</div>
                <div className="col">{wapiData?.strGenre}</div>
                <div className="col">{wapiData?.establishedYear}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Albums</h3>
            </div>
            <ul className="list-group list-group-flush">
              {wapiData?.albums?.map((album, index) => (
                <li key={index} className="list-group-item text-center">
                  {album.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Artists</h3>
            </div>
            <ul className="list-group list-group-flush">
              {wapiData?.artists?.map((artist, index) => (
                <li key={index} className="list-group-item text-center">
                  {artist.firstName} {artist.lastName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}