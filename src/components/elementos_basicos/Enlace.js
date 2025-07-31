// Importación de React
import React from 'react';

// Componente de enlace reutilizable
function Enlace({ href, texto }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{texto}</a>;
}

// Exportación del componente
export default Enlace;
