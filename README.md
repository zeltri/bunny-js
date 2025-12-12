# 🐰 Bunny-JS

> Una librería minimalista para manipular el DOM de manera sencilla y elegante.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/CROBF-tech/bunny-js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Bunny-JS es una librería ligera y fácil de usar que simplifica la manipulación del DOM en JavaScript. Con una API fluida e intuitiva, puedes crear elementos HTML, seleccionar existentes y aplicar cambios de manera encadenada.

## 🎯 Características

- 🪶 **Ligero**: Sin dependencias externas
- 🔗 **Fluido**: API encadenable para un código más legible
- 🛡️ **TypeScript**: Soporte completo para tipado fuerte
- 🌐 **Universal**: Funciona en todos los navegadores modernos
- 🎨 **Intuitivo**: Métodos simples para tareas comunes
- 🚀 **Rápido**: Optimizado para rendimiento

## 🚀 Instalación

```bash
npm install @crobf/bunny-js
```

O usando yarn:

```bash
yarn add @crobf/bunny-js
```

## 📖 Inicio Rápido

```javascript
import { BunnyJS } from "@crobf/bunny-js";

// Crear un elemento
const div = BunnyJS.div({ class: "mi-clase" });
div.text("¡Hola Mundo!").bg("lightblue").insertIn(document.body);

// Seleccionar elementos existentes
const button = BunnyJS.select("#mi-boton");
button.on("click", () => alert("¡Clic!"));
```

## 🎯 API

### Creación de Elementos

Crea cualquier elemento HTML con atributos iniciales:

```javascript
// Crear un div con clase
const container = BunnyJS.div({ class: "container" });

// Crear un botón con múltiples atributos
const btn = BunnyJS.button({
  type: "submit",
  class: "btn btn-primary",
  id: "submit-btn",
});

// Crear un input
const input = BunnyJS.input({
  type: "text",
  placeholder: "Escribe algo...",
});
```

### Selección de Elementos

Selecciona elementos del DOM existente:

```javascript
// Seleccionar un elemento
const header = BunnyJS.select(".header");

// Seleccionar múltiples elementos
const items = BunnyJS.selectAll(".item");
```

### Manipulación de Texto y Contenido

```javascript
const div = BunnyJS.div();

// Establecer texto
div.text("Contenido del div");

// Crear un enlace
div.link("Visitar sitio", "https://example.com", { target: "_blank" });

// Agregar elementos de lista
const ul = BunnyJS.ul();
ul.item("Elemento 1", { class: "list-item" });
ul.item("Elemento 2", { class: "list-item" });
```

### Eventos

Agrega event listeners fácilmente:

```javascript
const button = BunnyJS.button({ class: "btn" });

button.on("click", () => {
  console.log("Botón clicado!");
});

button.on("mouseenter", (event) => {
  event.target.style.opacity = "0.8";
});
```

### Estilos

Aplica estilos CSS de manera fluida:

```javascript
const card = BunnyJS.div({ class: "card" });

card
  .bg("white")
  .color("#333")
  .font("Arial, sans-serif")
  .spacing(["10px", "20px"], "15px");
```

### Visibilidad y Acciones

Controla la visibilidad de elementos:

```javascript
const modal = BunnyJS.div({ class: "modal" });

// Mostrar elemento
modal.show();

// Ocultar elemento
modal.hide();

// Alternar clases
modal.toggle("className");
```

### Atributos

Manipula atributos HTML:

```javascript
const img = BunnyJS.img();

// Establecer atributo
img.attr("src", "image.jpg");
img.attr("alt", "Descripción de imagen");

// Obtener atributo
const src = img.attr("src"); // 'image.jpg'
```

## 📚 Ejemplos Avanzados

### Crear una lista de tareas

```javascript
const todoList = BunnyJS.ul({ class: "todo-list" });

const tasks = ["Comprar leche", "Llamar al doctor", "Hacer ejercicio"];

tasks.forEach((task) => {
  const li = BunnyJS.li().text(task);
  li.on("click", () => li.toggle("completed"));
  li.insertIn(todoList);
});

todoList.insertIn(document.body);
```

### Formulario interactivo

```javascript
const form = BunnyJS.form({ class: "contact-form" });

const nameInput = BunnyJS.input({
  type: "text",
  placeholder: "Tu nombre",
  required: true,
});

const emailInput = BunnyJS.input({
  type: "email",
  placeholder: "tu@email.com",
  required: true,
});

const submitBtn = BunnyJS.button({
  type: "submit",
  class: "btn-submit",
});
submitBtn.text("Enviar");

form.on("submit", (e) => {
  e.preventDefault();
  alert("Formulario enviado!");
});

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitBtn);
form.insertIn(document.body);
```

## 📝 Documentación Completa

Para más información y ejemplos detallados, visita [la documentación web](https://bunny-js.vercel.app/docs).

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una idea para mejorar Bunny-JS, por favor abre un issue o envía un pull request en [GitHub](https://github.com/CROBF-tech/bunny-js).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ por [CROBF](https://crobf.tech)

## Referencia de API

### Objeto Principal: `BunnyJS`

El objeto `BunnyJS` es el punto de entrada principal para trabajar con la librería. Actúa como un proxy dinámico que proporciona métodos para crear cualquier elemento HTML y para seleccionar elementos del DOM.

### Métodos de selección

#### `BunnyJS.select(selector)`

Selecciona un elemento del DOM mediante un selector CSS y lo mejora con los métodos de Bunny-JS.

- **Parámetros**: `selector` (string) - Selector CSS para encontrar el elemento
- **Retorna**: `BunnyExtendedElement` con el elemento seleccionado o `null` si no se encuentra
- **Ejemplo**:
  ```javascript
  const miElemento = BunnyJS.select("#miId");
  if (miElemento) {
    miElemento.text("Nuevo texto").bg("lightblue");
  }
  ```

#### `BunnyJS.selectAll(selector)`

Selecciona múltiples elementos del DOM mediante un selector CSS y los mejora.

- **Parámetros**: `selector` (string) - Selector CSS para encontrar los elementos
- **Retorna**: Array de `BunnyExtendedElement` con los elementos seleccionados
- **Ejemplo**:
  ```javascript
  const parrafos = BunnyJS.selectAll("p");
  parrafos.forEach((p) => p.toggle("destacado"));
  ```

### Métodos de creación de elementos

BunnyJS proporciona métodos para crear cualquier elemento HTML válido (más de 140 etiquetas). Todos aceptan un objeto de atributos opcionales y retornan un `BunnyExtendedElement`.

**Sintaxis**:

```javascript
BunnyJS.tagname(props?: Record<string, string>)
```

**Ejemplo**:

```javascript
// Crear varios tipos de elementos
const miDiv = BunnyJS.div({ class: "container" });
const miParrafo = BunnyJS.p({ id: "texto" });
const miBoton = BunnyJS.button({ type: "submit", class: "btn" });
const miInput = BunnyJS.input({ type: "email", placeholder: "Email" });
const titulo = BunnyJS.h1({ class: "title" });
const section = BunnyJS.section({ id: "main" });
```

### Métodos de los Elementos

Todos los elementos creados o seleccionados con Bunny-JS tienen acceso a los siguientes métodos:

#### Métodos de Contenido

##### `text(value: string)`

Establece el contenido de texto del elemento.

```javascript
elemento.text("Hola Mundo");
```

##### `link(value: string, href: string, attrs: Record<string, string>)`

Crea un enlace dentro del elemento.

```javascript
elemento.link("Visitar", "https://example.com", { target: "_blank" });
```

##### `item(value: string, attrs: Record<string, string>)`

Añade un elemento de lista (li) al elemento actual (debe ser ul o ol).

```javascript
lista.item("Elemento 1", { class: "item" });
```

#### Métodos de Atributos

##### `attr(key: string, value?: string)`

Obtiene o establece atributos HTML.

```javascript
elemento.attr("src", "image.jpg"); // Establece
const src = elemento.attr("src"); // Obtiene
```

#### Métodos de Eventos

##### `on(event: string, handler: EventListener)`

Agrega un event listener al elemento.

```javascript
elemento.on("click", (event) => {
  console.log("Click!");
});
```

#### Métodos de Estilos

##### `bg(color: string)`

Establece el color de fondo.

```javascript
elemento.bg("#ffffff");
```

##### `color(color: string)`

Establece el color del texto.

```javascript
elemento.color("#333333");
```

##### `font(font: string)`

Establece la fuente.

```javascript
elemento.font("16px Arial, sans-serif");
```

##### `spacing(margin?, padding?)`

Establece márgenes y padding. Acepta string, [vertical, horizontal] o [top, right, bottom, left].

```javascript
elemento.spacing("10px", "20px");
elemento.spacing(["10px", "20px"], ["5px", "10px"]);
```

#### Métodos de Acciones

##### `show(mode?: string)`

Muestra el elemento (elimina display: none).

```javascript
elemento.show();
elemento.show("flex");
```

##### `hide()`

Oculta el elemento (establece display: none).

```javascript
elemento.hide();
```

##### `toggle(className: string | string[])`

Alterna una o más clases CSS.

```javascript
elemento.toggle("active");
elemento.toggle(["active", "visible"]);
```

##### `insertIn(query: string | HTMLElement)`

Inserta el elemento en el contenedor especificado.

```javascript
elemento.insertIn(document.body);
elemento.insertIn(".container");
```
