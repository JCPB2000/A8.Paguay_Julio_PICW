// Importa React
import React from 'react';

// Muestra una imagen con props
function Imagen({ src, alt, width, height }) {
  return <img src={src} alt={alt} width={width} height={height} />;
}

// Exporta el componente
export default Imagen;
