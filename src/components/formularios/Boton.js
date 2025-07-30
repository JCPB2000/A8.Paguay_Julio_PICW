const Boton = ({ texto, onClick, type = "button" }) => {
  return (
    <button type={type} className="btn btn-primary mt-2" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
