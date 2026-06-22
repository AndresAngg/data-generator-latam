# Data Generator LATAM

Proyecto encargado de la generación de datos de prueba para el ecosistema LATAM Automation.

---

## 📌 Descripción

Este proyecto permite generar datos necesarios para la ejecución de pruebas automatizadas, incluyendo información de usuarios, escenarios y estructuras requeridas por los tests.

---

## ⚙️ Requisitos

- Node.js >= 16
- npm >= 8

---

## 📦 Instalación

```bash
npm install
```
## 🚀 Ejecución

Para ejecutar la generación de datos:
```bash
npm start
```
o según configuración:

node index.js
📁 Estructura del proyecto
data-generator-latam/
│
├── src/
│   ├── generators/
│   ├── data/
│   └── utils/
│
├── index.js
├── package.json
└── README.md
📤 Salida de datos

Los datos generados se almacenan en:

/output

o en la ruta configurada en el proyecto.

🔗 Relación con otros proyectos

Este proyecto alimenta los datos utilizados por:

latam-automation
👨‍💻 Notas
Asegurarse de ejecutar este proyecto antes de correr las pruebas automatizadas.
Los datos pueden ser sobrescritos en cada ejecución.
