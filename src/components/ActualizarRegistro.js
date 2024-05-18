import React, { Component } from 'react';
import axios from 'axios';

class ActualizarRegistro extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente con los datos del libro recibidos como prop
    this.state = {
      libro: props.libro,
      ISBN: props.libro.ISBN,
      nombreLibro: props.libro.nombreLibro,
      autor: props.libro.autor,      
      editorial: props.libro.editorial,          
      paginas: props.libro.paginas
    };
  }
  
  handleChange = event => {
    
    this.setState({ [event.target.name]: event.target.value });
  };

  // Método para manejar cambios en los campos de entrada
  handleChange = event => {
          
    this.setState({ [event.target.name]: event.target.value });
  };

  // Método para manejar el envío del formulario de actualización
  handleSubmit = async event => {
    event.preventDefault(); // Evitamos que se produzca el comportamiento por defecto del formulario
    const { libro, ISBN, nombreLibro, autor, editorial, paginas } = this.state; // Obtenemos los datos del estado
    try {
        // Enviamos una solicitud POST al servidor para actualizar el registro del paciente
        await axios.put(`http://localhost:3001/libreria/libro/${libro._id}`, {
            ISBN,
            nombreLibro,
            autor,
            editorial,
            paginas
        });
        alert('Registro actualizado correctamente.'); // Mostramos un mensaje de éxito        
        // Llamamos a la función de callback
        this.props.onEditSuccess();        
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      alert('Error al actualizar el registro. Por favor, intenta nuevamente.'); // Mostramos un mensaje de error
    }
  };

  render() {
    // Extraemos los datos del estado
    const { ISBN, nombreLibro, autor, editorial, paginas } = this.state;

    return (
      <div>
        <h2>Actualizar Registro</h2>
        {/* Formulario para actualizar el registro del libro */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>ISBN:</label>
            {/* Campo de entrada para el ISBN del libro (desactivado porque no puede editarse) */}
            <input type="text" name="ISBN" value={ISBN} onChange={this.handleChange} disabled />
          </div>
          <div>
            <label>Título:</label>
            {/* Campo de entrada para el título del libro */}
            <input type="text" name="nombreLibro" value={nombreLibro} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Autor:</label>
            {/* Campo de entrada para el autor del libro */}
            <input type="text" name="autor" value={autor} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Editorial:</label>
            {/* Campo de entrada para la editorial del libro */}
            <input type="text" name="editorial" value={editorial} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Páginas:</label>
            {/* Campo de entrada para la cantidad de páginas del libro */}
            <input type="number" name="paginas" value={paginas} onChange={this.handleChange} required />
          </div>                    
          {/* Botón para enviar el formulario */}          
          <button type="submit">Actualizar Registro</button>
        </form>
      </div>
    );
  }
}

export default ActualizarRegistro;
