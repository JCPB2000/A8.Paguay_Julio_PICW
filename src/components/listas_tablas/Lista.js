import React from 'react';

function Lista({ elementos = [] }) {
  return (
    <ul className="list-group">
      {elementos.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
