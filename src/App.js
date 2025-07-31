import React, { useState } from 'react';
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
import InputEmail from './components/input_especializados/InputEmail';
import InputPassword from './components/input_especializados/InputPassword';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    clave: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${formData.nombre}\nCorreo: ${formData.correo}`);
  };

  return (
    <div className="container mt-4 text-center">
      {/* Logo ESPE */}
      <Imagen
        src="https://www.espe.edu.ec/wp-content/uploads/2018/10/LOGO-ESPE_500.png"
        alt="Logo ESPE"
        width="300"
        height="auto"
      />

      {/* Título principal */}
      <Titulo texto="Mi Proyecto React" nivel={1} />
      <Parrafo texto="Este proyecto muestra componentes personalizados en React." />
      <Enlace href="https://react.dev" texto="Documentación oficial de React" />

      <hr />
      <Titulo texto="Lista de tareas" nivel={2} />
      <Lista elementos={['Aprender React', 'Crear componentes', 'Divertirse programando']} />

      <hr />
      <Titulo texto="Tabla de usuarios" nivel={2} />
      <Tabla
        cabecera={['Nombre', 'Correo']}
        datos={[
          ['Julio', 'juliocesar@espe.com'],
          ['Marco', 'marco@espe.com']
        ]}
      />

      <hr />
      <Titulo texto="Formulario de contacto" nivel={2} />
      <Formulario onSubmit={handleSubmit}>
        <InputText
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <InputEmail
          name="correo"
          placeholder="Tu correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <InputPassword
          name="clave"
          placeholder="Tu contraseña"
          value={formData.clave}
          onChange={handleChange}
        />
        <Boton texto="Enviar" />
      </Formulario>
    </div>
  );
}

export default App;
