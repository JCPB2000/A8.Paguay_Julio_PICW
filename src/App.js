import HolaMundoExterno from "./HolaMundoExterno";

import 'bootstrap/dist/css/bootstrap.min.css';

function HolaMundoInterno() {
  
  //const mostrarHolaMundoInterno = () => {
  //  alert('Hola mundo interno');
  //};

  function mostrarHolaMundoInterno() {
    alert("Hola mundo interno con función clásica.")
  }

  return (
    <div>
      <h1 className="text-success fw-bold">Hola mundo interno</h1>
      <button
        type='button'
        className="btn btn-primary"
        onClick={mostrarHolaMundoInterno}
      >
        Mostrar Hola Mundo Interno
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <HolaMundoInterno />
      <HolaMundoExterno />
    </div>
  );
}

export default App;
