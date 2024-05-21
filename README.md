# front-end-libreria

## Descripción

Este proyecto constituye el frontend de una aplicación destinada a la gestión de información de libros para la librería "Apilados". Está desarrollado con React y se conecta a un backend API RESTful construido con Node.js y Express. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros de libros, facilitando a los trabajadores de la empresa la búsqueda y administración rápida de los mismos.

## Características

- **Enrutamiento:** Configurado con `react-router-dom` para la navegación del sitio.
- **Cliente HTTP:** Conexión al backend mediante `axios`.
- **Componentes React:** Construcción modular y reutilizable de componentes.
- **Validación de Datos:** Utiliza `simple-react-validator` para validar el ingreso de datos.
- **Dinamismo en Componentes:** Uso de JSX y métodos del ciclo de vida de React para una experiencia interactiva.
- **Búsqueda:** Permite buscar libros por nombre, autor y editorial.
- **Visualización de Datos:** Muestra fotografía, nombre, autor y editorial de los libros, con enlaces para detalles, actualización y eliminación.

## Estructura del Proyecto

```plaintext
/frontend
└── src
    ├── components
    │   ├── Nav.js
    │   ├── Home.js
    │   ├── ListarLibros.js
    │   ├── LibroRegistro.js
    │   ├── AgregarLibro.js
    │   ├── ActualizarRegistro.js
    │   ├── EliminarRegistro.js
    │   ├── BuscarLibro.js
    │   └── BusquedaPersonalizada.js
    ├── App.js
    └── index.js
```

## Instrucciones de Instalación

1. Clona el repositorio.
2. Navega a la carpeta `frontend`.
3. Instala las dependencias: `npm install`.
4. Inicia la aplicación: `npm start`.

## Componentes Principales

### Nav.js

- **Descripción:** Barra de navegación para moverse entre las diferentes páginas de la aplicación.

### Home.js

- **Descripción:** Página de bienvenida de la aplicación.

### ListarLibros.js

- **Descripción:** Lista todos los libros disponibles.
- **Visualización:** Muestra la fotografía, nombre, autor y editorial de cada libro, con un enlace a los detalles del libro.

### LibroRegistro.js

- **Descripción:** Muestra los detalles de un libro específico.
- **Funcionalidades:** Incluye enlaces para actualizar o eliminar el libro.

### AgregarLibro.js

- **Descripción:** Permite agregar un nuevo libro.
- **Validación:** Utiliza `simple-react-validator` para validar los datos del libro.
- **Enlace:** Añade el libro a la base de datos mediante una petición HTTP a la API.

### ActualizarRegistro.js

- **Descripción:** Permite actualizar la información de un libro existente.
- **Validación:** Utiliza `simple-react-validator` para validar los datos actualizados.

### EliminarRegistro.js

- **Descripción:** Permite eliminar un libro de la base de datos.

### BuscarLibro.js

- **Descripción:** Permite buscar un libro específico a través de su ID.

### BusquedaPersonalizada.js

- **Descripción:** Permite buscar libros por nombre, autor o editorial.
- **Funcionalidades:** Realiza una búsqueda dinámica y muestra los resultados correspondientes.

## Integración con Backend

Este proyecto trabaja en conjunto con el backend disponible en el siguiente repositorio:
[api_restful_libreria](https://github.com/jmcstoltze/api_restful_libreria)

## Capturas de Pantalla

La carpeta `screenshots` en la raíz del proyecto contiene imágenes de la aplicación en funcionamiento.

## Autor

Jose Contreras Stoltze
