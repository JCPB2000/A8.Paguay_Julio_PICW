import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from './components/elementos_basicos/Titulo';
import Parrafo from './components/elementos_basicos/Parrafo';
import Imagen from './components/elementos_basicos/Imagen';
import Enlace from './components/elementos_basicos/Enlace';

import Lista from './components/listas_tablas/Lista';
import Tabla from './components/listas_tablas/Tabla';

import Formulario from './components/formularios/Formulario';
import Boton from './components/formularios/Boton';

import InputText from './components/input_especializados/InputText';
import InputPassword from './components/input_especializados/InputPassword';
import InputEmail from './components/input_especializados/InputEmail';
import InputTel from './components/input_especializados/InputTel';
import InputURL from './components/input_especializados/InputURL';
import InputSearch from './components/input_especializados/InputSearch';

import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    telefono: '',
    url: '',
    busqueda: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container mt-4">
      <Titulo texto="Mi Proyecto React - A8 PICW" nivel={1} />
      <Parrafo texto="Este proyecto incluye componentes funcionales reutilizables y validados con Bootstrap 5." />

      <Imagen
        src="https://via.placeholder.com/200"
        alt="Ejemplo"
        width="200"
        height="200"
      />

      <Enlace href="https://react.dev" texto="Visita React.dev" />

      <Titulo texto="Lista de tecnologías" nivel={2} />
      <Lista elementos={['HTML', 'CSS', 'JavaScript', 'React']} />

      <Titulo texto="Tabla de Usuarios" nivel={2} />
      <Tabla
        cabecera={['Nombre', 'Edad']}
        datos={[
          ['Carlos', 28],
          ['María', 32],
        ]}
      />

      <Titulo texto="Formulario de registro" nivel={2} />
      <Formulario onSubmit={handleSubmit}>
        <InputText
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <InputEmail
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputPassword
          name="contraseña"
          placeholder="Contraseña (mínimo 6 caracteres)"
          value={formData.contraseña}
          onChange={handleChange}
          required
          minLength={6}
        />
        <InputTel
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <InputURL
          name="url"
          placeholder="Tu sitio web"
          value={formData.url}
          onChange={handleChange}
        />
        <InputSearch
          name="busqueda"
          placeholder="Buscar algo"
          value={formData.busqueda}
          onChange={handleChange}
        />
        <Boton texto="Enviar" type="submit" />
      </Formulario>
    </div>
  );
}

export default App;
