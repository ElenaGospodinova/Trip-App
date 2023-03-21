import React from 'react';

const LowPolyBackground = () => {
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,600 300,0 600,600" fill="#eaeaea" />
      <polygon points="0,600 150,450 300,600" fill="#dcdcdc" />
      <polygon points="300,0 450,150 600,0" fill="#dcdcdc" />
      <polygon points="150,450 450,150 300,300" fill="#c0c0c0" />
    </svg>
  );
};

export default LowPolyBackground;
