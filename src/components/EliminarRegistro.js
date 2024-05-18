import React, { Component } from 'react';
import axios from 'axios';

class EliminarRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false // Estado para controlar si se está eliminando el registro
    };
  }

  // Método para manejar la eliminación del registro del libro
  handleDelete = async () => {
    const { libroId, onDeleteSuccess } = this.props; // Obtenemos el ID del libro y la función de éxito desde las props
    try {
      this.setState({ loading: true }); // Establecemos el estado de carga a true mientras se procesa la eliminación
      // Enviamos una solicitud DELETE al servidor para eliminar el registro del libro
      await axios.delete(`http://localhost:3001/libreria/libro/${libroId}`);
      alert('Registro eliminado correctamente.'); // Mostramos un mensaje de éxito
      onDeleteSuccess(); // Llamamos a la función de éxito para actualizar el estado en el componente LibroRegistro
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      alert('Error al eliminar el registro. Por favor, intenta nuevamente.'); // Mostramos un mensaje de error
    } finally {
      this.setState({ loading: false }); // Restablecemos el estado de carga a true tras la eliminación
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <a href="#" onClick={this.handleDelete} disabled={loading}>
          {loading ? 'Eliminando...' : 'Eliminar'}
        </a>
      </div>
    );
  }
}

export default EliminarRegistro;
