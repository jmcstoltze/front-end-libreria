import React, { Component } from 'react';
import axios from 'axios';
import LibroRegistro from './LibroRegistro';

class ListarLibros extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado del componente
    this.state = {
      libros: [], // Almacena la lista de libros
      loading: true, // Indica si se está cargando la lista de libros
      libroSeleccionado: null, // Guarda el libro seleccionado para mostrar en el componente LibroRegistro
    };
  }

  // Método para manejar el clic en el nombre del libro
  handleClickNombreLibro = (libro) => {
    this.setState({ libroSeleccionado: libro });
  };

  // Método que se ejecuta al montar el componente
  async componentDidMount() {
    try {
      // Realizamos una solicitud GET al backend para obtener la lista de libros
      const response = await axios.get('http://localhost:3001/libreria/libros');
      // Actualizamos el estado con la lista de pacientes obtenida del backend
      this.setState({ libros: response.data.libros, loading: false });
    } catch (error) {
      console.error('Error al obtener la lista de libros:', error);
      // Manejamos errores en caso de que la solicitud falle
      alert('Error al obtener la lista de libros. Por favor, intenta nuevamente.');
      this.setState({ loading: false });
    }
  }

  // Método asíncrono para manejar la actualización exitosa del registro de libro
  handleUpdateSuccess = async () => {
    // Vuelve a mostrar la lista de libros
    this.setState({ libroSeleccionado: null });
    // Recarga los datos de la lista tras la actualización
    try {
      // Realizar una nueva solicitud GET al backend para obtener la lista actualizada de libros
      const response = await axios.get('http://localhost:3001/libreria/libros');
      // Actualizar el estado con la lista de libros obtenida del backend
      this.setState({ libros: response.data.libros });
    } catch (error) {
      console.error('Error al obtener la lista de libros:', error);
      // Manejar errores en caso de que la solicitud falle
      alert('Error al obtener la lista de libros. Por favor, intenta nuevamente.');
    }
  };

  

  // Renderización  del componente
  render() {
    const { libros, loading, libroSeleccionado } = this.state;

    // Si aún está cargando la lista de libros, mostramos un mensaje de carga
    if (loading) {
      return <div>Cargando...</div>;
    }

    // Si se ha seleccionado un libro, mostramos solo el componente LibroRegistro
    if (libroSeleccionado) {
      return (
        <div>          
          <LibroRegistro 
            libro={libroSeleccionado}
            onUpdateSuccess={this.handleUpdateSuccess} // Pasa la función de retorno            
          />
        </div>
      );
    }

    return (
      <div>
        <h2>Listado de Libros</h2>
        {/* Tabla para mostrar la lista de libros; se ajusta a la información requerida por el cliente*/}
        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black' }}>ID</th>
              <th style={{ border: '1px solid black' }}>ISBN</th>
              <th style={{ border: '1px solid black' }}>Título</th>
              <th style={{ border: '1px solid black' }}>Autor</th>
              <th style={{ border: '1px solid black' }}>Editorial</th>
              <th style={{ border: '1px solid black' }}>Portada</th>
              <th style={{ border: '1px solid black' }}>Páginas</th>              
            </tr>
          </thead>
          <tbody>
            {/* Iteramos sobre la lista de libros para mostrar cada uno en una fila de la tabla */}
            {libros.map(libro => (
              <tr key={libro._id}>
                <td style={{ border: '1px solid black' }}>{libro._id}</td>
                <td style={{ border: '1px solid black' }}>{libro.ISBN}</td>
                <td style={{ border: '1px solid black' }}>
                  <a href="#" onClick={() => this.handleClickNombreLibro(libro)}>{libro.nombreLibro}</a>                  
                </td>                
                <td style={{ border: '1px solid black' }}>{libro.autor}</td>
                <td style={{ border: '1px solid black' }}>{libro.editorial}</td>                
                <td style={{ border: '1px solid black' }}>
                    {libro.portada ? ( // Verificamos si hay una foto disponible
                        <img src={`http://localhost:3001/libreria/imagen/${libro.portada}`} alt="Portada del libro" style={{ width: '200px'}} />
                    ) : (
                        <div>No hay foto disponible</div>
                    )}
                </td>
                <td style={{ border: '1px double black' }}>{libro.paginas}</td>                                               
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mostramos el componente LibroRegistro si hay un libro seleccionado */}        
      </div>
    );
  }
}

export default ListarLibros;
