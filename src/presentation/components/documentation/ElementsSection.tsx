
import { CodeBlock } from "../ui/CodeBlock";

const basicElementExample = `import { BunnyJS } from "@crobf/bunny-js";

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
});`;

const elementWithContentExample = `import { BunnyJS } from "@crobf/bunny-js";

// Crear un div y añadir texto
const miDiv = BunnyJS.div({ class: "mi-clase" });
miDiv.text("Hola, soy un div");
miDiv.insertIn(document.body);

// Crear un enlace dentro de un div
const container = BunnyJS.div();
container.link("Visitar sitio", "https://example.com", { 
  target: "_blank" 
});
container.insertIn(document.body);`;

const listExample = `import { BunnyJS } from "@crobf/bunny-js";

// Crear una lista con elementos
const ul = BunnyJS.ul({ class: "mi-lista" });
ul.item("Elemento 1", { class: "list-item" });
ul.item("Elemento 2", { class: "list-item" });
ul.item("Elemento 3", { class: "list-item" });
ul.insertIn(document.body);`;

export const ElementsSection = () => {
  return (
    <section id="elementos" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
        Creación de elementos
      </h2>
      <p className="mb-4 text-gray-700">
        Crea cualquier elemento HTML con atributos iniciales usando BunnyJS. Todos los elementos HTML válidos están disponibles como métodos.
      </p>
      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Elementos básicos
      </h3>
      <CodeBlock code={basicElementExample} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Añadir contenido
      </h3>
      <p className="mb-4 text-gray-700">
        Usa los métodos fluidos para añadir texto y contenido a los elementos.
      </p>
      <CodeBlock code={elementWithContentExample} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Crear listas
      </h3>
      <p className="mb-4 text-gray-700">
        El método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">item()</code> facilita la creación de listas.
      </p>
      <CodeBlock code={listExample} />
    </section>
  );
};
