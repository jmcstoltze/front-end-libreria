import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <h1>Menú de navegación</h1>
                <ul>
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to="/libro/nuevo">Agregar Libro</NavLink></li>
                    <li><NavLink to="/libros/listar">Listar Libros</NavLink></li>
                    <li><NavLink to="/libro/buscar">Buscar Libro</NavLink></li>
                    <li><NavLink to="/libros/busqueda">Búsqueda Personalizada</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;
