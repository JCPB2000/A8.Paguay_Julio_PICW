import React from 'react';

function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className="form-control mb-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
