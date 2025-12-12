# Preguntas de Entrevista sobre Bunny-JS

## 1. ¿Por qué se eligió el nombre "Bunny-JS" para la librería?

¿Qué inspiración o significado tiene el nombre? ¿Hay alguna historia detrás de la elección de "bunny"?

- Porque bunny es conejo en ingles y los conejos son rapidos. La librería esta pensada para que sea facil de usar, facil de aprender y facil de extender.

## 2. ¿Cuáles fueron los principales cambios o mejoras introducidos en la versión 2.0.0 respecto a versiones anteriores?

¿Qué motivó el bump de versión mayor? ¿Qué problemas de la versión anterior se solucionaron?

- La versión anterior se hizo creando una clase principal y varias clases secundarias basadas en diversas etiquetas html con algunos helpers especificos. Esto fue un error, ya que terminamos teniendo un monton de clases y muchos conflictos debido a los tipos. Esta versión se hizo con la intención de no reemplazar los elementos HTML sino extenderlos con algunas funciones que aceleren y mejoren la experiencia de desarrollo.

## 3. ¿Cómo se decidió qué métodos incluir en cada decorador (actions, helpers, styles)?

¿Hubo algún criterio específico para agrupar funcionalidades en estos tres decoradores? ¿Por qué no se incluyeron más categorías como animaciones o efectos?

- No se incluyo animaciones ni efectos ya que la librería esta pensada para ser muy liviana y minimalista.

## 4. ¿Cuál es el roadmap futuro de Bunny-JS?

¿Hay planes para agregar nuevas funcionalidades, como soporte para animaciones, AJAX, o integración con frameworks modernos? ¿Cómo se priorizan las nuevas features?

- Agregar más funciones auxiliares para trabajar con tablas más rapidamente. Agregar integraciones con otras librerías conocidas como animejs. Agregar funciones para manejar estados persistentes entre renderizados por medio de session-storage y local-storage.

## 5. ¿Cómo maneja Bunny-JS la compatibilidad con diferentes navegadores y versiones?

¿Hay algún polyfill necesario? ¿Se han hecho pruebas exhaustivas en diferentes entornos? ¿Cuál es el soporte mínimo de navegador requerido?

Actualmente bunny-js debería funcionar en todos los navegadores modernos. Puede fallar en navegadores viejos como IE.
