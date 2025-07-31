import React from 'react';

function Imagen({ src, alt, width, height }) {
  return <img src={src} alt={alt} width={width} height={height} />;
}

export default Imagen;
