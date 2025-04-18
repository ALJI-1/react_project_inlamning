import React from 'react'
import musicService from '../services/music-group-service';
import {useEffect, useState } from 'react';
import {Link} from 'react-router';


export function HomePage() {
  
  const [wapiData, setWapiData] = useState(null);

  useEffect(() => {
    (async () => {
      const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);
      let data = await _service.readInfoAsync();
      setWapiData(data);
    })();
  }, []);

  return (
    <div className="container px-4 py-4" id="home">
      <div className="bg-body-tertiary p-5 rounded text-center">
        <div className="col-sm-8 py-5 mx-auto">
          <h1 className="display-5 fw-bold">Your favorite music</h1>
          <h2 className="pb-1" style={{ fontStyle: 'italic' }}>
            Current available data, check it out!
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5 justify-content-between">
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-body-secondary flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em"
              >
                <use xlinkHref="#boombox" />
              </svg>
              <div>
                <p
                  className="bi bi-boombox mb-0 fs-1"
                  style={{ alignContent: 'center' }}
                ></p>
                <Link to={`/artistList`} className="btn btn-sm">
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                    Music groups
                  </h3>
                </Link>
                <p
                  id="count-groups"
                  style={{
                    color: 'rgb(255, 0, 0)',
                    fontSize: '30px',
                    fontWeight: 'bolder',
                  }}
                >
                  {wapiData?.db.nrSeededMusicGroups}
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-body-secondary flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em"
              >
                <use xlinkHref="#album" />
              </svg>
              <div>
                <p className="bi bi-vinyl mb-0 fs-1"></p>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Albums</h3>
                <p
                  id="count-albums"
                  style={{
                    color: 'rgb(255, 0, 0)',
                    fontSize: '30px',
                    fontWeight: 'bolder',
                  }}
                >
                  {wapiData?.db?.nrSeededAlbums}
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-body-secondary flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em"
              >
                <use xlinkHref="#artist" />
              </svg>
              <div>
                <p className="bi bi-music-note-list mb-0 fs-1"></p>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Artists</h3>
                <p
                  id="count-artists"
                  style={{
                    color: 'rgb(255, 0, 0)',
                    fontSize: '30px',
                    fontWeight: 'bolder',
                  }}
                >
                  {wapiData?.db?.nrSeededArtists}
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              color: 'gold',
              fontSize: 'xx-large',
              fontWeight: 'bolder',
              fontFamily: 'monospace',
            }}
          >
            Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}
