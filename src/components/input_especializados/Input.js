// Importa React
import React from 'react';

// Input genérico reutilizable
function Input({ type = "text", name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name} // <- este es el que te faltaba
      className="form-control mb-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
