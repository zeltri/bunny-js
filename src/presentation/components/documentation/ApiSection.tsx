
import { CodeBlock } from "../ui/CodeBlock";

const proxyExplanation = `// El objeto BunnyJS es un Proxy dinámico que intercepta 
// las llamadas a propiedades y las convierte en elementos HTML

import { BunnyJS } from "@crobf/bunny-js";

// Cuando llamas a BunnyJS.div(), el proxy:
// 1. Intercepta la propiedad 'div'
// 2. Verifica que sea una etiqueta HTML válida
// 3. Crea un elemento <div> usando document.createElement()
// 4. Aplica los atributos proporcionados
// 5. Mejora el elemento con métodos adicionales
// 6. Retorna el elemento mejorado

const div = BunnyJS.div({ class: "container", id: "main" });
// Internamente: document.createElement("div")
// + setAttribute("class", "container")
// + setAttribute("id", "main")
// + enhanceElement(element)`;

const selectMethods = `import { BunnyJS } from "@crobf/bunny-js";

// BunnyJS.select(selector: string)
// Selecciona un elemento del DOM y lo mejora con métodos de Bunny

const header = BunnyJS.select(".header");
// Internamente:
// 1. document.querySelector(".header")
// 2. Si existe, enhanceElement(element)
// 3. Retorna el elemento mejorado o null

if (header) {
  header.text("Nuevo título").bg("#f0f0f0");
}

// BunnyJS.selectAll(selector: string)
// Selecciona múltiples elementos y los mejora

const items = BunnyJS.selectAll(".item");
// Internamente:
// 1. Array.from(document.querySelectorAll(".item"))
// 2. Mapea cada elemento aplicando enhanceElement()
// 3. Retorna array de elementos mejorados

items.forEach(item => {
  item.toggle("active");
});`;

const enhanceElement = `// La función enhanceElement es el corazón de Bunny-JS
// Toma un elemento HTML nativo y le añade métodos adicionales

// Proceso de mejora:
// 1. withActions: Añade show(), hide(), toggle(), insertIn()
// 2. withHelpers: Añade on(), text(), link(), item(), attr()
// 3. withStyles: Añade bg(), color(), font(), spacing()

// El elemento resultante mantiene todas las propiedades 
// y métodos del elemento HTML nativo, más los métodos de Bunny-JS

const element = document.createElement("div");
// element es un HTMLDivElement estándar

const enhanced = enhanceElement(element);
// enhanced tiene: todas las propiedades de HTMLDivElement
// + métodos de Bunny-JS (text, bg, on, etc.)`;

const actionsMethods = `import { BunnyJS } from "@crobf/bunny-js";

// show(mode?: string): void
// Muestra el elemento estableciendo display
const modal = BunnyJS.div({ class: "modal" });
modal.show();         // display: ""
modal.show("flex");   // display: "flex"

// hide(): void
// Oculta el elemento
modal.hide();         // display: "none"

// toggle(className: string | string[]): void
// Alterna clases CSS
modal.toggle("active");              // Una clase
modal.toggle(["active", "visible"]); // Múltiples clases

// insertIn(query: string | HTMLElement): void
// Inserta el elemento en un contenedor
modal.insertIn(document.body);      // Elemento directo
modal.insertIn(".container");       // Selector CSS`;

const helpersMethods = `import { BunnyJS } from "@crobf/bunny-js";

// on(event: string, handler: EventListener): BunnyExtendedElement
// Añade un event listener (retorna el elemento para encadenar)
const btn = BunnyJS.button({ class: "btn" });
btn.on("click", (e) => console.log("Click!"));

// text(value: string): BunnyExtendedElement
// Establece el contenido de texto
btn.text("Haz clic aquí");

// link(value: string, href: string, attrs: Record<string, string>): BunnyExtendedElement
// Crea un enlace dentro del elemento
const div = BunnyJS.div();
div.link("Visitar", "https://example.com", { target: "_blank" });

// item(value: string, attrs: Record<string, string>): BunnyExtendedElement
// Añade un elemento de lista (para ul/ol)
const ul = BunnyJS.ul();
ul.item("Item 1", { class: "list-item" });
ul.item("Item 2", { class: "list-item" });

// attr(key: string, value?: string): string | null
// Obtiene o establece un atributo
const img = BunnyJS.img();
img.attr("src", "image.jpg");     // Establece
const src = img.attr("src");      // Obtiene: "image.jpg"`;

const stylesMethods = `import { BunnyJS } from "@crobf/bunny-js";

// bg(color: string): BunnyExtendedElement
// Establece el color de fondo
const card = BunnyJS.div();
card.bg("#ffffff");
card.bg("rgb(255, 255, 255)");
card.bg("hsl(0, 0%, 100%)");

// color(color: string): BunnyExtendedElement
// Establece el color del texto
card.color("#333333");

// font(font: string): BunnyExtendedElement
// Establece la fuente (propiedad CSS font completa)
card.font("16px Arial, sans-serif");
card.font("bold 14px/1.5 'Helvetica Neue'");

// spacing(margin?, padding?): BunnyExtendedElement
// Establece margin y padding con sintaxis flexible

// Solo margin (string)
card.spacing("20px");

// Margin y padding
card.spacing("10px", "20px");

// Con arrays [vertical, horizontal]
card.spacing(["10px", "20px"], ["15px", "25px"]);

// Con arrays [top, right, bottom, left]
card.spacing(["10px", "20px", "30px", "40px"]);`;

const chainingExample = `import { BunnyJS } from "@crobf/bunny-js";

// Todos los métodos que retornan BunnyExtendedElement
// se pueden encadenar para crear código fluido

const card = BunnyJS.div({ class: "card" })
  .text("Título de la tarjeta")
  .bg("#ffffff")
  .color("#333333")
  .font("16px Arial")
  .spacing("20px", "15px")
  .on("click", () => console.log("Click!"))
  .on("mouseenter", (e) => e.target.style.opacity = "0.8")
  .on("mouseleave", (e) => e.target.style.opacity = "1")
  .insertIn(document.body);

// El elemento 'card' está completamente configurado
// y ya insertado en el DOM en una sola expresión`;

const typeDefinitions = `// Definiciones de tipos principales de Bunny-JS

type BunnyExtendedElement = HTMLElement & {
  // Métodos de acciones
  show(mode?: string): void;
  hide(): void;
  toggle(className: string | string[]): void;
  insertIn(query: string | HTMLElement): void;
  
  // Métodos helpers
  on(event: keyof HTMLElementEventMap, handler: EventListener): BunnyExtendedElement;
  text(value: string): BunnyExtendedElement;
  link(value: string, href: string, attrs: Record<string, string>): BunnyExtendedElement;
  item(value: string, attrs: Record<string, string>): BunnyExtendedElement;
  attr(key: string, value?: string): string | null;
  
  // Métodos de estilos
  bg(color: string): BunnyExtendedElement;
  color(color: string): BunnyExtendedElement;
  font(font: string): BunnyExtendedElement;
  spacing(margin?: MarginAndPaddingType, padding?: MarginAndPaddingType): BunnyExtendedElement;
};

type BunnyTagFunction = (props?: Record<string, string>) => BunnyExtendedElement;

type DynamicProxy<T> = T & {
  [K in keyof HTMLElementTagNameMap]: BunnyTagFunction;
} & {
  select(selector: string): BunnyExtendedElement | undefined;
  selectAll(selector: string): BunnyExtendedElement[];
};`;

const architectureExample = `// Arquitectura interna de Bunny-JS

// 1. core/proxy.ts - El Proxy principal
export const BunnyJS = new Proxy(BunnyElement, {
  get(_, prop) {
    return (props: Record<string, string> = {}) => {
      
      // Caso especial: select
      if (prop === "select") {
        return (selector: string) => {
          const found = document.querySelector(selector);
          return found ? enhanceElement(found as HTMLElement) : null;
        };
      }
      
      // Caso especial: selectAll
      if (prop === "selectAll") {
        return (selector: string) => {
          const found = Array.from(document.querySelectorAll<HTMLElement>(selector));
          return found.map(e => enhanceElement(e));
        };
      }
      
      // Validar que sea una etiqueta HTML válida
      if (!htmlTagNames.includes(String(prop))) {
        throw new Error(\`Invalid html tag: \${String(prop)}\`);
      }
      
      // Crear el elemento
      const el = document.createElement(prop as keyof HTMLElementTagNameMap);
      
      // Aplicar atributos
      for (const k in props) el.setAttribute(k, props[k]);
      
      // Mejorar y retornar
      return enhanceElement(el);
    };
  }
});

// 2. decorators/all.ts - Función de mejora
export function enhanceElement<T extends HTMLElement>(el: T): BunnyExtendedElement {
  return withStyles(withHelpers(withActions(el))) as BunnyExtendedElement;
}

// 3. decorators/actions.ts, helpers.ts, styles.ts
// Cada decorador añade métodos específicos usando Object.assign`;

export const ApiSection = () => {
    return (
        <section id="api" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
                Referencia de API
            </h2>
            <p className="mb-6 text-gray-700">
                Esta sección explica en detalle cómo funciona Bunny-JS internamente y proporciona una
                referencia completa de todas las funciones y métodos disponibles.
            </p>

            {/* El Proxy Principal */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                El Proxy Principal
            </h3>
            <p className="mb-4 text-gray-700">
                Bunny-JS utiliza un <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">Proxy</code> de
                JavaScript para interceptar dinámicamente las llamadas a propiedades y crear elementos HTML. Esto permite
                una sintaxis intuitiva donde cualquier etiqueta HTML válida se convierte automáticamente en un método.
            </p>
            <CodeBlock code={proxyExplanation} />

            {/* Métodos de Selección */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Métodos de Selección
            </h3>
            <p className="mb-4 text-gray-700">
                Los métodos especiales <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">select()</code> y{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">selectAll()</code> permiten trabajar
                con elementos existentes del DOM.
            </p>
            <CodeBlock code={selectMethods} />

            {/* Proceso de Mejora */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Proceso de Mejora de Elementos
            </h3>
            <p className="mb-4 text-gray-700">
                Cada elemento creado o seleccionado pasa por un proceso de "mejora" (enhancement) que le añade
                métodos adicionales sin modificar el prototipo global de HTMLElement.
            </p>
            <CodeBlock code={enhanceElement} />

            {/* Métodos de Acciones */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Métodos de Acciones
            </h3>
            <p className="mb-4 text-gray-700">
                Los métodos de acciones controlan la visibilidad y posición de los elementos en el DOM.
            </p>
            <CodeBlock code={actionsMethods} />

            {/* Métodos Helpers */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Métodos Helpers
            </h3>
            <p className="mb-4 text-gray-700">
                Los métodos helpers facilitan la manipulación común de elementos y la gestión de eventos.
            </p>
            <CodeBlock code={helpersMethods} />

            {/* Métodos de Estilos */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Métodos de Estilos
            </h3>
            <p className="mb-4 text-gray-700">
                Los métodos de estilos proporcionan una forma fluida de aplicar CSS a los elementos.
            </p>
            <CodeBlock code={stylesMethods} />

            {/* Encadenamiento */}
            <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">
                Encadenamiento de Métodos
            </h3>
            <p className="mb-4 text-gray-700">
                La mayoría de los métodos retornan el elemento mejorado, permitiendo encadenar múltiples
                operaciones en una sola expresión fluida.
            </p>
            <CodeBlock code={chainingExample} />

            <div className="mt-8 p-4 bg-bunny-yellow-lighter rounded-lg border border-bunny-yellow">
                <h4 className="font-semibold text-bunny-black mb-2">💡 Nota Importante</h4>
                <p className="text-gray-700 text-sm">
                    Todos los elementos mejorados mantienen acceso completo a las propiedades y métodos nativos de
                    HTMLElement. Puedes usar tanto los métodos de Bunny-JS como los métodos nativos del DOM en
                    cualquier momento. Por ejemplo: <code className="bg-white px-1 py-0.5 rounded">element.addEventListener()</code>
                    {" "}y <code className="bg-white px-1 py-0.5 rounded">element.on()</code> funcionan ambos.
                </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-bunny-black mb-2">🔍 Etiquetas HTML Soportadas</h4>
                <p className="text-gray-700 text-sm mb-2">
                    Bunny-JS soporta más de 140 etiquetas HTML estándar, incluyendo:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                    <div>
                        <strong>Contenido:</strong> div, span, p, a, h1-h6, section, article, aside, header, footer, nav, main
                    </div>
                    <div>
                        <strong>Formularios:</strong> form, input, button, select, option, textarea, label, fieldset, legend
                    </div>
                    <div>
                        <strong>Multimedia:</strong> img, video, audio, source, canvas, svg, picture
                    </div>
                    <div>
                        <strong>Tablas:</strong> table, thead, tbody, tfoot, tr, td, th, caption, col, colgroup
                    </div>
                    <div>
                        <strong>Listas:</strong> ul, ol, li, dl, dt, dd
                    </div>
                    <div>
                        <strong>Semántico:</strong> time, mark, abbr, code, pre, blockquote, cite, q, strong, em, small
                    </div>
                    <div>
                        <strong>Interactivo:</strong> details, summary, dialog, menu
                    </div>
                    <div>
                        <strong>Y muchas más...</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};
