
import { CodeBlock } from "../ui/CodeBlock";

const eventsCode = `import { BunnyJS } from "@crobf/bunny-js";

// Click básico
const button = BunnyJS.button({ class: "btn" });
button.text("Haz clic");
button.on("click", () => {
  alert("¡Botón pulsado!");
});

// Acceso al evento
const input = BunnyJS.input({ type: "text" });
input.on("input", (event) => {
  console.log("Valor:", event.target.value);
});

// Múltiples eventos en un elemento
const campo = BunnyJS.input({ type: "text" });
campo.on("focus", (event) => {
  event.target.style.borderColor = "#FFC700";
});
campo.on("blur", (event) => {
  event.target.style.borderColor = "#ccc";
});`;

const encadenableEvents = `import { BunnyJS } from "@crobf/bunny-js";

// Los eventos son encadenables
const card = BunnyJS.div({ class: "card" })
  .text("Hover sobre mí")
  .bg("#f5f5f5")
  .on("mouseenter", (event) => {
    event.target.style.opacity = "0.8";
  })
  .on("mouseleave", (event) => {
    event.target.style.opacity = "1";
  })
  .insertIn(document.body);`;

export const EventsSection = () => {
  return (
    <section id="eventos" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
        Eventos
      </h2>
      <p className="mb-4 text-gray-700">
        Agrega event listeners fácilmente con el método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">on()</code>.
        Recibe el objeto de evento nativo como parámetro.
      </p>
      <CodeBlock code={eventsCode} />

      <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
        API Encadenable
      </h3>
      <p className="mb-4 text-gray-700">
        El método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">on()</code> devuelve el elemento,
        permitiendo encadenar múltiples llamadas.
      </p>
      <CodeBlock code={encadenableEvents} />

      <p className="mt-4 text-gray-700">
        Bunny-JS simplifica el manejo de eventos manteniendo compatibilidad total con la API nativa de eventos del navegador.
      </p>
    </section>
  );
};
