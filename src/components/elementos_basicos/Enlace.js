import React from 'react';

function Enlace({ href, texto }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{texto}</a>;
}

export default Enlace;
