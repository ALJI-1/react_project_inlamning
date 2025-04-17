import React from 'react';

const YouTubePlayer = () => {
  return (
    <div style={{ position: 'fixed', bottom: 10, left: 10, zIndex: 1000 }}>
      <iframe
        width="300"
        height="170"
        src="https://www.youtube.com/embed/o1tj2zJ2Wvg?autoplay=0"
        title="YouTube Music Player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;