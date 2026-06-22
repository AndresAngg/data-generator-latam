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
npm run start generate 100
npm run start list
npm run start clean
```

## 📤 Salida de datos

Los datos generados se almacenan en:

/output

o en la ruta configurada en el proyecto.

## 📧 Configuración de envío de correo

Este proyecto incluye envío automático de correo con los resultados o datos generados.

Para habilitar esta funcionalidad es necesario configurar variables de entorno.

## 🔐 Variables de entorno

El proyecto utiliza un archivo .env para manejar credenciales sensibles.

Se incluye un archivo de ejemplo:

.env.example

Debes copiarlo y crear tu propio .env:
```bash
cp .env.example .env
```
## 📌 Variables requeridas
```
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_o_app_password
EMAIL_TO=destinatario@empresa.com
```

🧠 Ejemplo de configuración
```
EMAIL_USER=miusuario@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
EMAIL_TO=qa-team@latam.com
```
