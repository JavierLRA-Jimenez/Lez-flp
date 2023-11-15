import React from 'react';

const Fear = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="src/assets/Components/Fear/FearVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Fear;
