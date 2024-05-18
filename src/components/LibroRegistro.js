import React, { Component } from 'react';
import ActualizarRegistro from './ActualizarRegistro'; // Importamos el componente ActualizarRegistro
import EliminarRegistro from './EliminarRegistro'; // Importamos el componente EliminarRegistro

class LibroRegistro extends Component {

    constructor(props) {
        super(props);
        this.state = {
          editing: false // Estado para controlar si se está editando el libro
        };
    }
    
    // Método para activar/desactivar la edición del libro
    toggleEditing = () => {
        this.setState(prevState => ({ editing: !prevState.editing }));
    };

    // Manejo tras actualización de registro
    handleUpdateSuccess = () => {
        // Vuelve a la lista de libros
        this.setState({ editing: false });
        this.props.onUpdateSuccess(); // Llama a la función de retorno proporcionada por ListarLibros
    };

    // Manejo para la acción de volver
    handleBack = () => {
        // Recargar la lista de libros
        this.setState({ editing: false });
        this.props.onUpdateSuccess();
    };

    // Manejo tras eliminación de registro
    handleDeleteSuccess = () => {
        this.setState({ editing: false });
        this.props.onUpdateSuccess(); // Llama a la función de retorno proporcionada por ListarLibros
    };

    render() {
        // Obtenemos los datos del libro desde las props
        const { libro } = this.props;
        const { editing } = this.state;

        return (
        <div>
            {/* Mostramos el componente ActualizarRegistro si estamos en modo de edición */}
            {editing ? (
                <ActualizarRegistro libro={libro}  onEditSuccess={this.handleUpdateSuccess}/>
            ) : (
                <div>
                    <h2>Detalles del Libro</h2>
            
                    <div>
                        <p>
                            {/* Botón para activar/desactivar la edición del libro */}
                            <a href="#" onClick={this.toggleEditing}>Editar</a>
                            {/* Componente para eliminar el registro del libro */}
                            <EliminarRegistro libroId={libro._id} onDeleteSuccess={this.handleDeleteSuccess}/>
                            {/* Botón para volver */}
                            <a href="#" onClick={this.handleBack}>Volver</a>
                        </p>
                    </div>
                    <div>
                        <p><strong>ID:</strong> {libro._id}</p>
                        <p><strong>ISBN:</strong> {libro.ISBN}</p>
                        <p><strong>Título:</strong> {libro.nombreLibro}</p>
                        <p><strong>Autor:</strong> {libro.autor}</p>
                        <p><strong>Editorial:</strong> {libro.editorial}</p>                        
                        <p><strong>Paginas:</strong> {libro.paginas}</p>
                        {libro.portada ? (
                        <div>
                        <p><strong>Portada del libro:</strong></p>
                            <img src={`http://localhost:3001/libreria/imagen/${libro.portada}`} alt="Portada del libro" style={{ width: '200px'}} />
                        </div>
                        ) : (
                            <p><strong>Portada del libro:</strong> No hay imagen disponible</p>
                        )}
                    </div>            
                </div>
            )}                    
        </div>
        );
    }
}

export default LibroRegistro;
