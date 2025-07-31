// Importación de React y useState para manejar el estado del formulario
import React, { useState } from 'react';

// Importación de componentes personalizados
import Formulario from './Formulario';
import Boton from './Boton';
import InputText from '../input_especializados/InputText';
import InputEmail from '../input_especializados/InputEmail';
import InputPassword from '../input_especializados/InputPassword';
import InputTel from '../input_especializados/InputTel';
import InputURL from '../input_especializados/InputURL';
import InputSearch from '../input_especializados/InputSearch';

// Componente principal del formulario completo
function FormularioCompleto() {
  // Estado local para guardar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    clave: '',
    telefono: '',
    web: '',
    busqueda: ''
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente");
  };

  // Renderizado del formulario con todos los campos
  return (
    <div className="card p-4">
      <h3>Formulario Completo</h3>
      <Formulario onSubmit={handleSubmit}>
        <InputText
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          minLength={3}
        />
        <InputEmail
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <InputPassword
          name="clave"
          placeholder="Contraseña"
          value={formData.clave}
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
          name="web"
          placeholder="Tu sitio web"
          value={formData.web}
          onChange={handleChange}
        />
        <InputSearch
          name="busqueda"
          placeholder="¿Qué estás buscando?"
          value={formData.busqueda}
          onChange={handleChange}
        />
        <Boton texto="Enviar formulario" />
      </Formulario>
    </div>
  );
}

export default FormularioCompleto;
