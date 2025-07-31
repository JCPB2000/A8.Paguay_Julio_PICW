import React from 'react';

// Botón que envía el formulario
function Boton({ texto }) {
  return (
    <button type="submit" className="btn btn-primary">
      {texto}
    </button>
  );
}

export default Boton;
