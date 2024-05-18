import React, { Component } from 'react';
import axios from 'axios'; // Importación de axios

class AgregarLibro extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente
    this.state = {
      ISBN: '',
      nombreLibro: '',
      autor: '',
      editorial: '',
      paginas: ''
    };
  }

  // Función para manejar el envío del formulario
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizamos la solicitud post al backend api restful
      const response = await axios.post('http://localhost:3001/libreria/libro', {
        ISBN: this.state.ISBN,
        nombreLibro: this.state.nombreLibro,
        autor: this.state.autor,
        editorial: this.state.editorial,        
        paginas: parseInt(this.state.paginas) // Parseamos a un número entero        
      });
      // Obtenemos los datos de la respuesta
      const { status, message } = response.data;
      // Mostramos un mensaje de éxito si la solicitud es exitosa
      if (status === 'success') {
        alert(message);
        // Limpiamos los campos del formulario después de agregar el libro
        this.setState({
            ISBN: '',
            nombreLibro: '',
            autor: '',
            editorial: '',            
            paginas: ''
        })
      } else {
        // Mostramos un mensaje de error si la solicitud no es exitosa
        alert('Error al agregar paciente. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      // Manejo de errores
      console.error('Error al agregar libro:', error);
      alert('Error al agregar libro. Por favor, intenta nuevamente.');
    }
  };

  // Método para manejar cambios en los campos de entrada
  handleChange = event => {
    // Actualizamos el estado con los nuevos valores de los campos de entrada
    this.setState({ [event.target.name]: event.target.value }); // Otro tipo de dato    
  };

  render() {
    return (
      <div>
        <h2>Agregar Libro</h2>
        {/* Formulario para agregar un libro */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>ISBN:</label>
            {/* Campo de entrada para el ISBN del libro */}
            <input type="text" name="ISBN" value={this.state.ISBN} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Título:</label>
            {/* Campo de entrada para el título del libro */}
            <input type="text" name="nombreLibro" value={this.state.nombreLibro} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Autor:</label>
            {/* Campo de entrada para el autor del libro */}
            <input type="text" name="autor" value={this.state.autor} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Editorial</label>
            {/* Campo de entrada para la editorial del libro */}
            <input type="text" name="editorial" value={this.state.editorial} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Páginas:</label>
            {/* Campo de entrada para la cantidad de páginas */}
            <input type="number" name="paginas" value={this.state.paginas} onChange={this.handleChange} required />
          </div>                    
          {/* Botón para enviar el formulario */}
          <button type="submit">Agregar Libro</button>
        </form>
      </div>
    );
  }
}

export default AgregarLibro;
