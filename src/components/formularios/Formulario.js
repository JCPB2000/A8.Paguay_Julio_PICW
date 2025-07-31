import React from 'react';

function Formulario({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Formulario;
