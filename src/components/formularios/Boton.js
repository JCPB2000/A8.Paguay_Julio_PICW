import React from 'react';

function Boton({ texto, onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
