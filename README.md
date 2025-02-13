# Tienda Estática - Práctica Sass

## Descripción
Este proyecto es una tienda en línea estática desarrollada como parte del módulo de Diseño de Interfaces. Su propósito es demostrar el uso de HTML, CSS y Sass para la construcción de una interfaz visualmente atractiva y bien estructurada. No incluye funcionalidades dinámicas, sino que se centra en la presentación y navegación mediante enlaces.

## Tecnologías utilizadas
- HTML5
- CSS3 / Sass
- JavaScript (para efectos mínimos si es necesario)

## Estructura del Proyecto
El proyecto está organizado en las siguientes carpetas y archivos principales:

- `.vscode/` - Configuración del entorno de desarrollo en Visual Studio Code.
- `img/` - Contiene las imágenes utilizadas en la tienda.
- `js/` - Archivos JavaScript (si se usa para interactividad mínima).
- `node_modules/` - Dependencias del proyecto si se requiere compilación de Sass.
- `public/` - Archivos públicos accesibles desde el navegador.
- `sass/` - Contiene los archivos Sass organizados para la generación de CSS.
- `scss/` - Archivos fuente en Sass que se compilan en `styles.css`.
- `.gitignore` - Archivo para excluir archivos innecesarios en el repositorio.
- `index.html` - Página principal de la tienda.
- `avisoLegal.html` - Información legal del sitio.
- `carro.html` - Página del carrito de compras (solo visual, sin funcionalidad real).
- `detalles.html` - Sección de detalles de productos.
- `faq.html` - Página con preguntas frecuentes.
- `instalacion.html` - Información sobre instalación o uso del proyecto.
- `login.html` - Página de inicio de sesión ficticia.
- `productoA.html`, `productoH.html`, `productoM.html` - Páginas individuales de productos.
- `package.json` y `package-lock.json` - Archivos de gestión de dependencias si se usa npm.

## Capturas de Pantalla
(Incluir aquí imágenes de la interfaz del sitio, como la página principal y secciones clave).

## Instrucciones de Instalación
Si deseas clonar este proyecto y trabajar con Sass, sigue estos pasos:

```sh
git clone https://github.com/aLbEaNy/practica_sass.git
cd practica_sass
npm install  # Instalación de dependencias (si se usa npm)
```

Para compilar Sass a CSS, usa el siguiente comando:
```sh
npm run sass  # Compila los archivos Sass a CSS
```

## Enlace al repositorio
[GitHub - practica_sass](https://github.com/aLbEaNy/practica_sass)

## Notas adicionales
Este proyecto es una demostración de diseño de interfaces y buenas prácticas en estructura de archivos. No cuenta con una base de datos ni funcionalidades de backend, ya que su propósito es exclusivamente visual.
