import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Inicio from './components/Home';

// Importa todos los componentes que van en las rutas
import AgregarLibro from './components/AgregarLibro';
import ListarLibros from './components/ListarLibros';
import BuscarLibro from './components/BuscarLibro';
import BusquedaPersonalizada from './components/BusquedaPersonalizada';
import Nav from './components/Nav';

class Router extends Component {

    render(){
        return(
            <BrowserRouter>                                
                <div>
                    <Nav></Nav>
                    <Routes>                     
                        <Route exact path="/" Component={Inicio}></Route>
                        <Route exact path="/inicio" Component={Inicio}></Route>
                        <Route exact path="/libro/nuevo" Component={AgregarLibro}></Route>                                            
                        <Route exact path="/libros/listar" Component={ListarLibros}></Route>
                        <Route exact path="/libro/buscar" Component={BuscarLibro}></Route>                                    
                        <Route exact path="/libros/busqueda" Component={BusquedaPersonalizada}></Route>
                    </Routes>
                </div>                
            </BrowserRouter>
        );
    }
}

export default Router;