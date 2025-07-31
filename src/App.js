// Se implementa una aplicación en React con componentes personalizados, formulario validado y estilos aplicados con Bootstrap y CSS.

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.nombre || !formData.correo || !formData.clave) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Confirmación de envío
    setMensaje(`Datos enviados correctamente. ¡Gracias, ${formData.nombre}!`);

    // Limpieza del formulario
    setFormData({
      nombre: '',
      correo: '',
      clave: ''
    });
  };

  return (
    <div className="container fondo-contenedor mt-4 text-center">
      {/* Logo ESPE */}
      <Imagen
        src="https://www.espe.edu.ec/wp-content/uploads/2018/10/LOGO-ESPE_500.png"
        alt="Logo ESPE"
        width="300"
        height="auto"
        className="logo-espe"
      />

      {/* Título principal */}
      <Titulo texto="Mi Proyecto React" nivel={1} className="titulo-principal" />
      <Parrafo texto="Este proyecto muestra componentes personalizados en React que representan elementos HTML básicos. Se crearon componentes funcionales reutilizables mediante props, como imágenes, títulos, párrafos, enlaces, listas, tablas y formularios con inputs especializados. Todo fue organizado en archivos individuales dentro de la carpeta src/components y se aplicaron estilos utilizando Bootstrap y CSS. Esta implementación permitió comprender la estructura modular de React y su aplicación práctica en la creación de interfaces dinámicas.." />
      <Enlace
        href="https://www.espe.edu.ec/"
        texto="Centro de Investigaciones de Aplicaciones Militares"
      />

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

      {/* Mensaje de confirmación */}
      {mensaje && <p className="alert alert-success mt-3">{mensaje}</p>}
    </div>
  );
}

export default App;
