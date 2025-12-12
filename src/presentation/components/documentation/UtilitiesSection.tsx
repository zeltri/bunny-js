
import { CodeBlock } from "../ui/CodeBlock";

const allTagsExample = `import { BunnyJS } from "@crobf/bunny-js";

// Bunny-JS soporta todas las etiquetas HTML válidas
BunnyJS.div()
BunnyJS.span()
BunnyJS.p()
BunnyJS.h1() // h1, h2, h3, h4, h5, h6
BunnyJS.button()
BunnyJS.input()
BunnyJS.form()
BunnyJS.ul()
BunnyJS.ol()
BunnyJS.li()
BunnyJS.table()
BunnyJS.tr()
BunnyJS.td()
BunnyJS.th()
BunnyJS.a()
BunnyJS.img()
BunnyJS.video()
BunnyJS.audio()
BunnyJS.canvas()
// ... y más de 140 etiquetas HTML

// Todas pueden recibir atributos iniciales
BunnyJS.section({ id: "main", class: "container" })`;

const methodsSummary = `import { BunnyJS } from "@crobf/bunny-js";

// Creación de elementos
BunnyJS.tagname({ atributos })

// Selección
BunnyJS.select(selector)     // Selecciona un elemento
BunnyJS.selectAll(selector)  // Selecciona múltiples elementos

// Métodos de contenido
.text(texto)                 // Establece texto
.link(texto, href, attrs)    // Crea un enlace
.item(texto, attrs)          // Añade item a lista

// Métodos de atributos
.attr(key, value?)           // Obtiene/establece atributo

// Métodos de eventos
.on(evento, handler)         // Agrega event listener

// Métodos de estilos
.bg(color)                   // Color de fondo
.color(color)                // Color de texto
.font(font)                  // Fuente
.spacing(margin?, padding?)  // Márgenes y padding

// Métodos de acciones
.show(mode?)                 // Muestra elemento
.hide()                      // Oculta elemento
.toggle(className)           // Alterna clase(s)
.insertIn(query)             // Inserta en el DOM`;

export const UtilitiesSection = () => {
  return (
    <section id="utilidades" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
        Referencia Completa
      </h2>
      <p className="mb-4 text-gray-700">
        Bunny-JS incluye soporte para todas las etiquetas HTML válidas y proporciona una API completa para manipulación del DOM.
      </p>

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Etiquetas HTML Soportadas
      </h3>
      <p className="mb-4 text-gray-700">
        Puedes crear cualquier elemento HTML válido usando BunnyJS como proxy.
      </p>
      <CodeBlock code={allTagsExample} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        Resumen de Métodos
      </h3>
      <p className="mb-4 text-gray-700">
        Todos los métodos disponibles en elementos mejorados por Bunny-JS:
      </p>
      <CodeBlock code={methodsSummary} />

      <p className="mt-4 text-gray-700">
        Casi todos los métodos devuelven el elemento, permitiendo un estilo de programación fluido y encadenable.
      </p>
    </section>
  );
};
