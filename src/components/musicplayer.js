import React, { useState } from 'react';


const YouTubePlayer = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const togglePlayer = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="position-fixed bottom-0 start-0 p-3 bg-light shadow rounded" style={{ zIndex: 1000 }}>
      <button 
        onClick={togglePlayer} 
        className="btn btn-primary mb-2 w-100"
      >
        {isMinimized ? 'Expand player' : 'Minimize player'}
      </button>
      <div className={`card ${isMinimized ? 'd-none' : ''}`}>
        <div className="card-body text-center">
          <p className="card-text">Press play and browse!</p>
          <iframe
            className="w-100"
            height="170"
            src="https://www.youtube.com/embed/pAgnJDJN4VA?autoplay=0"
            title="YouTube Music Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;