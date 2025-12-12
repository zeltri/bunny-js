
import { InstallationSection } from "./InstallationSection";
import { ElementsSection } from "./ElementsSection";
import { ManipulationSection } from "./ManipulationSection";
import { EventsSection } from "./EventsSection";
import { StylesSection } from "./StylesSection";
import { ApiSection } from "./ApiSection";
import { UtilitiesSection } from "./UtilitiesSection";

export const DocumentationContent = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-bunny-black mb-8">
        Bunny-JS - Manipulación del DOM simplificada
      </h1>
      <p className="text-gray-700 mb-8 text-lg">
        Bunny-JS es una librería ligera y fácil de usar que simplifica la manipulación del DOM en JavaScript.
        Con una API fluida e intuitiva, puedes crear elementos HTML, seleccionar existentes y aplicar cambios de
        manera encadenada. Sin dependencias externas y con soporte completo para TypeScript.
      </p>

      <InstallationSection />
      <ElementsSection />
      <ManipulationSection />
      <EventsSection />
      <StylesSection />
      <ApiSection />
      <UtilitiesSection />
    </div>
  );
};
