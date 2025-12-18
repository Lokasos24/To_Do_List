📝 Proyecto de Tareas - JavaScript

Este es un proyecto de lista de tareas desarrollado con JavaScript puro, HTML y CSS básico.

El objetivo principal fue practicar la manipulación del DOM, manejo de eventos y control de estado de la aplicación, aplicando buenas prácticas en la gestión de arrays y renderizado dinámico.

⚡ Funcionalidades

➕ Agregar tareas mediante un input y un botón.

✅ Marcar tareas como completadas usando checkboxes.

🗑️ Eliminar tareas de forma segura, sin romper la relación entre estado y DOM.

🎨 Cambiar el estilo de la tarea según su estado (blue si está completada, white si no).

🔄 Renderizado dinámico de la lista para reflejar cambios en el estado de manera confiable.

💡 Lo que aprendí

Durante el desarrollo del proyecto, consolidé conceptos clave de JavaScript y manipulación del DOM, centrándome en mantener un estado consistente y operaciones seguras sobre arrays de objetos:

🌐 Diferencia entre estado y DOM

- El DOM solo representa el estado; nunca debe ser la fuente de la verdad.

- Mantener un estado centralizado permite que la UI sea una consecuencia de los datos, evitando inconsistencias visuales.

📚 Manejo de arrays de objetos y eliminación segura

- Usar directamente el índice del array como identificador es peligroso, porque al eliminar elementos los índices cambian.

- Cada tarea tiene un id único, que permanece constante sin importar su posición en el array.

- Esto asegura que las operaciones sobre el estado (eliminar, marcar completadas) sean confiables y predecibles.

🖼️ Renderizado dinámico

- Crear elementos con createElement y reconstruir el DOM permite reflejar siempre el estado actual.

- Limpiar y re-renderizar evita problemas de elementos desactualizados o duplicados.

🎯 Eventos y actualización del estado

- Capturar cambios en checkboxes y actualizar el estado interno, en lugar de modificar directamente el DOM.

- La UI se actualiza automáticamente a partir del estado, aplicando estilos condicionales según la propiedad completed.

🛠️ Buenas prácticas y lógica confiable

- Separar responsabilidades: el estado controla los datos y el DOM refleja el estado.

- Pensar en la “fuente de verdad” antes de manipular la UI.

🚀 Mejoras implementadas y posibles extensiones

✔️ Añadir persistencia de datos con localStorage.

✔️ Permitir eliminar tareas.

⬜ Mejorar la interfaz con CSS o frameworks ligeros.

⬜ Refactorizar el código para separar lógica de estado y renderizado de UI en funciones más limpias.

Los checks indican lo que ya está implementado, mientras que los elementos en blanco representan posibles mejoras futuras.

📂 Estructura del proyecto
proyecto-tareas/
├── index.html
├── script.js
├── style.css (opcional)
└── README.md

👨‍💻 Conclusión

Este proyecto me permitió consolidar conceptos clave de JavaScript y manipulación del DOM, aprendiendo la importancia de controlar el estado de la aplicación de forma clara y consistente.
Ahora comprendo cómo manejar arrays de objetos, renderizado dinámico y eventos de forma segura, construyendo una base sólida para proyectos más avanzados en el futuro.