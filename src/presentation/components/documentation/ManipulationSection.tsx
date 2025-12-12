import { CodeBlock } from "../ui/CodeBlock";

const selectionCode = `import { BunnyJS } from "@crobf/bunny-js";

// Seleccionar un elemento único del DOM
const header = BunnyJS.select(".header");
if (header) {
  header.text("Nuevo título");
  header.bg("#f0f0f0");
}

// Seleccionar múltiples elementos
const items = BunnyJS.selectAll(".item");
items.forEach(item => {
  item.text("Elemento actualizado");
  item.toggle("active");
});`;

const attributesCode = `import { BunnyJS } from "@crobf/bunny-js";

const img = BunnyJS.img();

// Establecer atributos
img.attr("src", "image.jpg");
img.attr("alt", "Descripción de imagen");

// Obtener atributo
const src = img.attr("src"); // 'image.jpg'

// Encadenar atributos
img.attr("width", "300").attr("height", "200");`;

const visibilityCode = `import { BunnyJS } from "@crobf/bunny-js";

const modal = BunnyJS.div({ class: "modal" });

// Mostrar elemento (elimina display: none)
modal.show();

// Con un modo de display específico
modal.show("flex");

// Ocultar elemento
modal.hide();

// Alternar clases
modal.toggle("active");
modal.toggle("visible");

// Alternar múltiples clases
modal.toggle(["class1", "class2"]);`;

const insertionCode = `import { BunnyJS } from "@crobf/bunny-js";

const card = BunnyJS.div({ class: "card" });
card.text("Contenido de la tarjeta");

// Insertar en el body
card.insertIn(document.body);

// Insertar en un selector específico
card.insertIn(".container");

// O pasar un elemento HTMLElement directamente
const container = document.querySelector(".container");
card.insertIn(container);`;

export const ManipulationSection = () => {
  return (
    <section id="manipulacion" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
        Manipulación del DOM
      </h2>
      <p className="mb-4 text-gray-700">
        Bunny-JS ofrece métodos potentes para seleccionar y manipular elementos existentes del DOM.
      </p>

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Selección de Elementos
      </h3>
      <p className="mb-4 text-gray-700">
        Selecciona elementos del DOM y mejóralos con los métodos de Bunny-JS.
      </p>
      <CodeBlock code={selectionCode} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Atributos
      </h3>
      <p className="mb-4 text-gray-700">
        Manipula atributos HTML con el método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">attr()</code>.
      </p>
      <CodeBlock code={attributesCode} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Visibilidad y Clases
      </h3>
      <p className="mb-4 text-gray-700">
        Controla la visibilidad y las clases CSS de los elementos.
      </p>
      <CodeBlock code={visibilityCode} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Inserción en el DOM
      </h3>
      <p className="mb-4 text-gray-700">
        Inserta elementos en el DOM con el método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">insertIn()</code>.
      </p>
      <CodeBlock code={insertionCode} />
    </section>
  );
};
