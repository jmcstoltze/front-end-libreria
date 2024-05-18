import React, { Component } from 'react';
import axios from 'axios';

class BuscarLibro extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente
    this.state = {
      idBusqueda: '', // Almacena el valor de búsqueda ingresado por el usuario
      libroEncontrado: null // Almacena la información del libro encontrado
    };
  }

  // Método para manejar el cambio en el campo de búsqueda
  handleChange = event => {
    this.setState({ idBusqueda: event.target.value });
  };

  // Método para manejar la búsqueda de libros por ID
  handleSearch = async () => {
    const { idBusqueda } = this.state;
    try {
      // Realizamos una solicitud GET al backend para buscar el libro por ID
      const response = await axios.get(`http://localhost:3001/libreria/libro/${idBusqueda}`);
      // Actualizamos el estado con la información del libro encontrado
      this.setState({ libroEncontrado: response.data.libro });
    } catch (error) {
      console.error('Error al buscar el libro:', error);
      // Manejamos errores en caso de que la búsqueda falle
      alert('libro no encontrado. Por favor, intenta nuevamente.');
    }
  };

  // Método para limpiar el formulario y la pantalla
  handleClear = () => {
    this.setState({
      idBusqueda: '',
      libroEncontrado: null
    });
  };

  // Renderización del componente
  render() {
    const { idBusqueda, libroEncontrado } = this.state;

    return (
      <div>
        <h2>Buscar libro por ID</h2>
        {/* Campo de entrada para la búsqueda por ID */}
        <input type="text" value={idBusqueda} onChange={this.handleChange} placeholder="Ingrese ID del libro" />
        {/* Botón para iniciar la búsqueda */}
        <button onClick={this.handleSearch}>Buscar</button>
        {/* Botón para limpiar el formulario y la pantalla */}
        <button onClick={this.handleClear}>Limpiar</button>
        {/* Mostramos la información del libro encontrado, si existe */}
        {libroEncontrado && (
          <div>
            <h3>Libro Encontrado</h3>
            <p>ID: {libroEncontrado._id}</p>
            <p>ISBN: {libroEncontrado.ISBN}</p>
            <p>Título: {libroEncontrado.nombreLibro}</p>
            <p>Autor: {libroEncontrado.autor}</p>
            <p>Editorial: {libroEncontrado.editorial}</p>            
            <p>Paginas: {libroEncontrado.paginas}</p>
            {/* Mostrar la imagen del libro si está disponible */}
            {libroEncontrado.portada ? (
                <div>
                    <p>Portada:</p>
                    <img src={`http://localhost:3001/libreria/imagen/${libroEncontrado.portada}`} alt="Foto del libro" style={{ width: '200px'}} />
                </div>
            ) : (
                <div>
                    <p>Foto del libro: No hay foto disponible</p>
                </div>
            )}
          </div>
        )}
        </div>
    );
  }
}

export default BuscarLibro;
