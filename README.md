# Proyecto de Tareas - JavaScript

Este es un proyecto simple de lista de tareas realizado con **JavaScript puro**, HTML y CSS básico.  

El objetivo principal fue **practicar la manipulación del DOM, manejo de eventos y estado de la aplicación**.

---

## 📝 Funcionalidades

- Agregar tareas con un input y botón.
- Marcar tareas como completadas usando checkboxes.
- Mantener el estado de cada tarea (si está completada o no).
- Cambiar el color de la tarea según su estado (`blue` si está completada, `white` si no).
- Re-renderizado dinámico de la lista de tareas para reflejar cambios en el estado.

---

## 💡 Lo que aprendí

Durante el desarrollo de este proyecto, profundicé en los siguientes conceptos:

1. **Diferencia entre estado y DOM**
   - El DOM **solo representa** el estado, no debe ser la fuente de la verdad.
   - El estado centralizado (objetos JS) controla la UI.

2. **Eventos y actualización de estado**
   - Capturar cambios en checkboxes y actualizar el estado real.
   - Evitar modificar directamente el DOM sin reflejar cambios en el estado.

3. **Renderizado dinámico**
   - Crear elementos de manera programática con `createElement`.
   - Limpiar y reconstruir el DOM para reflejar cambios en el estado.

4. **Uso correcto de operadores**
   - Diferencia entre `=` (asignación) y `===` (comparación).
   - Evitar errores típicos de principiantes en JavaScript.

5. **Control del flujo de aplicación**
   - Cómo mantener coherencia entre lo que el usuario ve y el estado interno de la app.
   - Pensar en “fuente de verdad” antes de manipular la UI.

---

## 🚀 Próximos pasos / mejoras

- Añadir persistencia de datos con `localStorage`.
- Permitir eliminar tareas.
- Mejorar la interfaz con CSS o frameworks ligeros.
- Refactorizar el código para separar **lógica de estado** y **renderizado de UI** en funciones más limpias.

---

## 📂 Estructura del proyecto

proyecto-tareas/
├── index.html
├── script.js
├── style.css (opcional)
└── README.md

yaml
Copiar código

---

## 👨‍💻 Conclusión

Este proyecto me ayudó a consolidar conceptos clave de **JavaScript y manipulación del DOM**, y a comprender la importancia de **controlar el estado de la aplicación** de forma clara y consistente. Es una base sólida para proyectos más avanzados en el futuro.
