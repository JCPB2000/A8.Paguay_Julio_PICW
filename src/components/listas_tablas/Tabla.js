const Lista = ({ elementos }) => {
  return (
    <ul>
      {elementos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Lista;