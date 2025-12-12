# 🐰 Bunny-JS

> Una librería minimalista para manipular el DOM de manera sencilla y elegante.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/CROBF-tech/bunny-js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Bunny-JS es una librería ligera y fácil de usar que simplifica la manipulación del DOM en JavaScript. Con una API fluida e intuitiva, puedes crear elementos HTML, seleccionar existentes y aplicar cambios de manera encadenada.

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

## ✨ Características

- 🪶 **Ligero**: Sin dependencias externas
- 🔗 **Fluido**: API encadenable para un código más legible
- 🛡️ **TypeScript**: Soporte completo para tipado fuerte
- 🌐 **Universal**: Funciona en todos los navegadores modernos
- 🎨 **Intuitivo**: Métodos simples para tareas comunes
- 🚀 **Rápido**: Optimizado para rendimiento

## 📚 Ejemplos Avanzados

### Crear una lista de tareas

```javascript
const todoList = BunnyJS.ul({ class: "todo-list" });

const tasks = ["Comprar leche", "Llamar al doctor", "Hacer ejercicio"];

tasks.forEach((task) => {
  const li = BunnyJS.li().text(task);
  li.on("click", () => li.toggle("completed"));
  li.insertIn(todoList); // Equivalente a: todoList.appendChild(li);
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

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una idea para mejorar Bunny-JS, por favor abre un issue o envía un pull request en [GitHub](https://github.com/CROBF-tech/bunny-js).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ por [CROBF](https://crobf.tech)
