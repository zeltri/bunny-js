# Resumen de la Biblioteca Bunny-JS

## Propósito General

Bunny-JS es una librería minimalista para manipular el DOM en JavaScript/TypeScript. Proporciona una API fluida para crear, seleccionar y manipular elementos HTML de manera sencilla y encadenada, similar a una alternativa ligera a jQuery. Está diseñada para ser fácil de usar, con métodos intuitivos para acciones comunes como mostrar/ocultar elementos, manejar eventos, aplicar estilos y más.

La biblioteca se basa en decoradores que "mejoran" los elementos HTMLElement estándar, agregando métodos adicionales sin modificar el prototipo global. Utiliza un proxy dinámico para crear elementos HTML válidos y seleccionar elementos existentes del DOM.

## Estructura de Archivos

### `src/bunny.ts`

- **Propósito**: Archivo principal de exportación. Reexporta todas las funcionalidades de la biblioteca para que los usuarios puedan importar todo desde un solo punto.
- **Contenido**: Simplemente exporta desde los módulos core y decorators.

### `src/core/element.ts`

- **Propósito**: Define la clase base `BunnyElement`, que extiende `HTMLElement`.
- **Contenido**: Incluye metadatos como versión ("2.0.0") y autor ("CROBF - https://crobf.tech"). Esta clase abstracta sirve como base para elementos mejorados.

### `src/core/proxy.ts`

- **Propósito**: Implementa el objeto principal `BunnyJS`, un proxy que permite crear elementos HTML dinámicamente y seleccionar elementos existentes.
- **Funcionalidades**:
  - Para cada nombre de etiqueta HTML válido (definido en `utils/tags.ts`), crea una función que genera un elemento con atributos opcionales.
  - Métodos especiales:
    - `select(selector)`: Selecciona un elemento único del DOM y lo mejora.
    - `selectAll(selector)`: Selecciona múltiples elementos y los mejora.
- **Ejemplo de uso**: `BunnyJS.div({ class: 'container' })` crea un div con clase 'container'.

### `src/core/types.ts`

- **Propósito**: Define los tipos TypeScript para la biblioteca.
- **Contenido**:
  - `BunnyExtendedElement`: Extiende HTMLElement con métodos de acciones, helpers y estilos.
  - `BunnyTagFunction`: Tipo para funciones que crean elementos con props.
  - `DynamicProxy`: Tipo del proxy principal, incluyendo métodos para todas las etiquetas HTML y select/selectAll.

### `src/decorators/actions.ts`

- **Propósito**: Agrega métodos de acción para controlar la visibilidad y posición de elementos.
- **Métodos**:
  - `show(mode?)`: Muestra el elemento (por defecto display vacío).
  - `hide()`: Oculta el elemento (display: none).
  - `toggle(className?)`: Alterna clases CSS.
  - `insertIn(query)`: Inserta el elemento en otro elemento del DOM.

### `src/decorators/helpers.ts`

- **Propósito**: Proporciona métodos auxiliares para manipulación básica de elementos.
- **Métodos**:
  - `on(event, handler)`: Agrega event listeners.
  - `text(value)`: Establece el texto del elemento.
  - `link(value, href, attrs)`: Crea un enlace (aunque parece incompleto en el código).
  - `item(value, attrs)`: Agrega un elemento de lista.
  - `attr(key, value?)`: Obtiene o establece atributos.

### `src/decorators/styles.ts`

- **Propósito**: Agrega métodos para aplicar estilos CSS de manera fluida.
- **Métodos**:
  - `bg(color)`: Establece el color de fondo.
  - `color(color)`: Establece el color del texto.
  - `font(font)`: Establece la fuente.
  - `spacing(margin?, padding?)`: Aplica márgenes y padding con soporte para strings o arrays.

### `src/decorators/all.ts`

- **Propósito**: Combina todos los decoradores en una función `enhanceElement`.
- **Funcionalidad**: Aplica `withActions`, `withHelpers` y `withStyles` en cadena para crear un elemento completamente mejorado.

### `src/utils/tags.ts`

- **Propósito**: Lista exhaustiva de nombres de etiquetas HTML válidas.
- **Contenido**: Array con más de 140 nombres de etiquetas HTML, usado para validar en el proxy.

## Cómo Funciona

1. El usuario importa `BunnyJS` desde la biblioteca.
2. Puede crear elementos: `const div = BunnyJS.div({ class: 'my-class' })`.
3. O seleccionar existentes: `const el = BunnyJS.select('.my-class')`.
4. Los elementos creados/seleccionados están "mejorados" con métodos adicionales.
5. Se pueden encadenar métodos: `div.text('Hello').bg('red').on('click', handler)`.

## Ventajas

- API fluida y encadenable.
- Tipado fuerte con TypeScript.
- Minimalista, sin dependencias externas.
- No modifica prototipos globales.
- Soporte para creación y selección de elementos.
