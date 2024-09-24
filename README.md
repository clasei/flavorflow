# 🍽️ Flavor Flow

**Flavor Flow** es una aplicación personal de recetas que te permite gestionar, descubrir y explorar recetas de manera intuitiva. Con una interfaz limpia y fácil de usar, los usuarios pueden añadir, editar y organizar recetas en categorías, además de marcar sus favoritas.

## 🛠️ Tecnologías utilizadas

- **React**: Librería de JavaScript utilizada para construir la interfaz de usuario de la aplicación.
- **Vite**: Herramienta para el desarrollo rápido y eficiente de la aplicación.
- **React Router**: Utilizado para gestionar las rutas y la navegación dentro de la aplicación.
- **HTML**: Estructura base de la aplicación.
- **CSS**: Estilos que definen la apariencia visual de la aplicación.
- **JSX**: Sintaxis de JavaScript extendida utilizada en los componentes de React para definir el renderizado.

## 🗂️ Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- **node_modules/**: Dependencias del proyecto.
- **public/**: Archivos estáticos accesibles desde el servidor.
- **src/**: Contiene el código fuente principal.
  - **assets/**: Archivos estáticos como imágenes o íconos.
  - **components/**: Componentes reutilizables de la aplicación.
    - **RecipeCard.jsx**: Tarjeta que muestra una vista previa de cada receta.
    - **RecipeList.jsx**: Lista que agrupa y muestra múltiples recetas.
    - **Sidebar.jsx**: Barra lateral para facilitar la navegación por la aplicación.
  - **data/**: Archivo que contiene los datos simulados de las recetas.
    - **recipes.json**: Datos estáticos de recetas en formato JSON.
  - **pages/**: Vistas principales de la aplicación.
    - **About.jsx**: Página con información sobre la aplicación.
    - **AddRecipe.jsx**: Vista para añadir nuevas recetas.
    - **Category.jsx**: Página que filtra y muestra recetas según su categoría.
    - **Dashboard.jsx**: Página principal donde se muestran todas las recetas disponibles.
    - **EditRecipeForm.jsx**: Vista para editar una receta ya existente.
    - **Favorites.jsx**: Página que agrupa las recetas marcadas como favoritas.
    - **NotFound.jsx**: Página de error 404 para rutas no encontradas.
    - **RecipeDetails.jsx**: Detalles específicos de una receta seleccionada.
  - **App.jsx**: Componente principal que define las rutas y el comportamiento global de la aplicación.
  - **main.jsx**: Archivo de entrada que monta la aplicación en el DOM.

- **App.css**: Estilos globales de la aplicación.
- **index.html**: Plantilla HTML principal.
- **package.json**: Archivo que maneja las dependencias y scripts del proyecto.
- **vite.config.js**: Configuración de Vite para el entorno de desarrollo.

## ✨ Características principales

- **➕ Añadir recetas**: Los usuarios pueden añadir sus propias recetas.
- **📂 Categorías**: Las recetas están organizadas por categorías para facilitar su búsqueda.
- **⭐ Recetas favoritas**: Opción para marcar recetas como favoritas y tener un acceso rápido a ellas.
- **📝 Editar recetas**: Capacidad de editar las recetas existentes.
- **🔍 Detalles completos**: Los usuarios pueden ver una receta en detalle, incluyendo todos sus ingredientes y pasos.

## 👩‍🍳 Autores

Este proyecto ha sido desarrollado por:

- Ana Badolato
- Núria Soley
- Clara Seijo
