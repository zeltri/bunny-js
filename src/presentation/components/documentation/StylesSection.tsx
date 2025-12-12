
import { CodeBlock } from "../ui/CodeBlock";

const basicStylesCode = `import { BunnyJS } from "@crobf/bunny-js";

const card = BunnyJS.div({ class: "card" });

// Establecer color de fondo
card.bg("white");

// Establecer color de texto
card.color("#333");

// Establecer fuente
card.font("Arial, sans-serif");

// Encadenar estilos
card.bg("lightblue").color("navy").font("Helvetica");`;

const spacingCode = `import { BunnyJS } from "@crobf/bunny-js";

const box = BunnyJS.div({ class: "box" });

// Aplicar solo margen (string)
box.spacing("20px");

// Aplicar margen y padding
box.spacing("10px", "20px");

// Margen con 2 valores [vertical, horizontal]
box.spacing(["10px", "20px"]);

// Margen con 4 valores [top, right, bottom, left]
box.spacing(["10px", "20px", "30px", "40px"]);

// Margen y padding con arrays
box.spacing(["10px", "20px"], ["15px", "25px"]);`;

const completeExample = `import { BunnyJS } from "@crobf/bunny-js";

// Crear una tarjeta con estilos completos
const card = BunnyJS.div({ class: "card" })
  .text("¡Hola Mundo!")
  .bg("#ffffff")
  .color("#333333")
  .font("16px Arial, sans-serif")
  .spacing(["20px", "0"], "20px")
  .on("click", () => {
    card.bg("#f0f0f0");
  })
  .insertIn(document.body);

// Los métodos de estilo son encadenables
// y devuelven el elemento para seguir manipulándolo`;

export const StylesSection = () => {
    return (
        <section id="estilos" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
                Estilos
            </h2>
            <p className="mb-4 text-gray-700">
                Aplica estilos CSS de manera fluida y encadenable con métodos específicos para las propiedades más comunes.
            </p>

            <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
                Estilos Básicos
            </h3>
            <p className="mb-4 text-gray-700">
                Usa <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">bg()</code>, {" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">color()</code> y {" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">font()</code> para estilizar elementos.
            </p>
            <CodeBlock code={basicStylesCode} />

            <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
                Espaciado (Margin y Padding)
            </h3>
            <p className="mb-4 text-gray-700">
                El método <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">spacing()</code> permite
                configurar márgenes y padding de forma flexible.
            </p>
            <CodeBlock code={spacingCode} />

            <h3 className="text-xl font-semibold text-bunny-black mt-6 mb-3">
                Ejemplo Completo
            </h3>
            <p className="mb-4 text-gray-700">
                Combina estilos con otros métodos para crear elementos completos en una sola cadena.
            </p>
            <CodeBlock code={completeExample} />

            <p className="mt-4 text-gray-700">
                Todos los métodos de estilo devuelven el elemento, permitiendo encadenar con otros métodos de Bunny-JS.
            </p>
        </section>
    );
};
