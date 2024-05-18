import React, { Component } from 'react';
import axios from 'axios';

class BusquedaPersonalizada extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente
    this.state = {
      filtro: '', // Almacena el valor del filtro ingresado por el usuario
      resultados: [] // Almacena los resultados de la búsqueda
    };
  }

  // Método para manejar el cambio en el campo de filtro
  handleChange = event => {
    this.setState({ filtro: event.target.value });
  };

  // Método para manejar la búsqueda personalizada
  handleSearch = async () => {
    const { filtro } = this.state;
    try {
        let response;
        // Realizamos la solicitud GET al backend según el filtro ingresado        
        response = await axios.get(`http://localhost:3001/libreria/libros/search/${filtro}`);
        
        // Actualizamos el estado con los resultados de la búsqueda
        this.setState({ resultados: response.data.libros });
    } catch (error) {
        console.error('Error en la búsqueda personalizada:', error);
        // Manejamos errores en caso de que la búsqueda falle
        alert('No se encontraron coincidencias. Por favor, intenta nuevamente.');
    }
  };

  // Método para limpiar el formulario y la pantalla
  handleClear = () => {
    this.setState({
      filtro: '',
      resultados: []
    });
  };

  // Renderización del componente
  render() {
    const { filtro, resultados } = this.state;

    return (
      <div>
        <h2>Búsqueda Personalizada</h2>
        {/* Campo de entrada para el filtro */}
        <p>TÍítulo, autor o editorial</p>
        <input type="text" value={filtro} onChange={this.handleChange} placeholder="Ingrese filtro de búsqueda" />
        {/* Botón para iniciar la búsqueda */}
        <button onClick={this.handleSearch}>Buscar</button>
        {/* Botón para limpiar el formulario y la pantalla */}
        <button onClick={this.handleClear}>Limpiar</button>
        {/* Mostramos los resultados de la búsqueda */}
        <div>
          {resultados.length > 0 && (
            <div>
              <h3>Resultados de la Búsqueda</h3>
              {resultados.map(libro => (            
                <div key={libro._id}>
                  <p>---------------------------------------------------------------------</p>  
                  <p>ID: {libro._id}</p>
                  <p>ISBN: {libro.ISBN}</p>
                  <p>Título: {libro.nombreLibro}</p>
                  <p>Autor: {libro.autor}</p>
                  <p>Editorial: {libro.editorial}</p>                  
                  <p>Páginas: {libro.paginas}</p>
                  {/* Mostrar la imagen del libro si está disponible */}
                  {libro.portada ? (
                    <div>
                      <p>Portada del libro:</p>
                      <img src={`http://localhost:3001/libreria/imagen/${libro.portada}`} alt="Portada del libro" style={{ width: '200px'}} />
                    </div>
                  ) : (
                    <div>
                      <p>Portada del libro: No hay imagen disponible</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BusquedaPersonalizada;
