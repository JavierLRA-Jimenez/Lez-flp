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
        <source src="https://drive.google.com/file/d/1m2X6Mczk8bmgx2OaMPwE9kgbUjpcqV1s/view?usp=drive_link" type="video/mp4" />
      </video>
    </div>
  );
}

export default Fear;
