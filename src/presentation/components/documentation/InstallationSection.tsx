
import { CodeBlock } from "../ui/CodeBlock";

const quickStartCode = `import { BunnyJS } from "@crobf/bunny-js";

// Crear un elemento
const div = BunnyJS.div({ class: "mi-clase" });
div.text("¡Hola Mundo!").bg("lightblue").insertIn(document.body);

// Seleccionar elementos existentes
const button = BunnyJS.select("#mi-boton");
button.on("click", () => alert("¡Clic!"));`;

export const InstallationSection = () => {
  return (
    <section id="instalacion" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-bunny-black mb-4 pb-2 border-b border-gray-200">
        Instalación
      </h2>
      <p className="mb-4 text-gray-700">
        Puedes incluir Bunny-JS en tu proyecto de varias maneras:
      </p>
      <h4 className="font-semibold text-bunny-black mb-2">Instalando via npm:</h4>
      <CodeBlock code='npm install @crobf/bunny-js' />
      <h4 className="font-semibold text-bunny-black mb-2 mt-4">O usando yarn:</h4>
      <CodeBlock code='yarn add @crobf/bunny-js' />
      <h3 className="text-xl font-semibold text-bunny-black mt-8 mb-3">Inicio Rápido</h3>
      <p className="mb-4 text-gray-700">
        Después de instalar, importa <code className="bg-gray-100 px-1 py-0.5 rounded text-bunny-black">BunnyJS</code> y comienza a crear elementos:
      </p>
      <CodeBlock code={quickStartCode} />
    </section>
  );
};
