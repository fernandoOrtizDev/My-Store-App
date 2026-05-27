# 🛒 My Store App

¡Bienvenido a **My Store App**! Una aplicación de comercio electrónico (E-commerce) moderna, rápida y responsiva construida con **React** y **Vite**. El proyecto simula una tienda virtual completa que integra un sistema de gestión de usuarios (registro e inicio de sesión), catálogo dinámico de productos, filtrado por categorías y vistas de detalle, todo conectado a una API REST pública.

---

## 📺 Demostración en Video

¡Mira la tienda en acción! Puedes ver el flujo de navegación, el proceso de autenticación y la experiencia de usuario en el siguiente video:

<video src="https://github.com/user-attachments/assets/f7eff349-c24d-43d1-9c61-07abd419f91a" width="100%" controls></video>

---

## ✨ Características

* 🔐 **Sistema de Autenticación Completo:** Módulo integrado para el registro seguro de nuevos usuarios y control de inicio de sesión (Login).
* 🛡️ **Seguridad y Persistencia:** Lógica orientada a mantener la sesión activa del usuario y proteger el estado de la aplicación.
* 📦 **Catálogo de Productos Dinámico:** Despliegue de artículos con imágenes oficiales, precios, descripciones y calificaciones en tiempo real.
* 🗂️ **Filtrado por Categorías:** Navegación segmentada para explorar ropa, joyería, electrónica, entre otras.
* 🔍 **Navegación Fluida (SPA):** Experiencia de usuario instantánea y fluida sin recargas de página gracias al enrutamiento del lado del cliente.
* ⚡ **Rendimiento Optimizado:** Desarrollado sobre Vite y gestionado con Bun para asegurar tiempos de carga mínimos.

---

## 🛠️ Tecnologías Utilizadas

<h4>Core Technologies</h4>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" title="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" title="Vite">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=F9F9F9" title="Bun">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" title="React Router">
  <img src="https://img.shields.io/badge/React_Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" title="React Hooks">
  <img src="https://img.shields.io/badge/Authentication-🔑-FCB900?style=for-the-badge" title="Authentication">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" title="JavaScript">
</span>


https://github.com/user-attachments/assets/ecdad1e1-37eb-48ff-a925-2a0497e59426


---

## 🧠 Arquitectura y Lógica de Desarrollo

Para garantizar un código limpio, mantenible y escalable basado en las mejores prácticas de la industria, la aplicación se estructuró bajo los siguientes pilares:

### 🔐 Gestión de Autenticación y Usuarios
El flujo de usuarios se diseñó enfocándose en la experiencia y validación en el Frontend:
* **Formularios Controlados:** Captura y validación en tiempo real de los datos ingresados por el usuario tanto en el Login como en la Creación de Cuenta (asegurando formatos correctos antes del envío).
* **Consumo de Endpoints de Autenticación:** Comunicación asíncrona para dar de alta perfiles y validar credenciales de acceso.
* **Protección de Vistas:** Lógica condicional orientada a restringir o permitir accesos a ciertos flujos de la tienda basándose en el estado de autenticación del usuario.

### 🎣 Custom Hooks (Abstracción de Lógica)
Se implementaron **Hooks Personalizados** para separar por completo la lógica de negocio y el consumo de datos de los componentes puramente visuales.
* Permite reutilizar la lógica de peticiones asíncronas (`fetch`) en diferentes secciones de la tienda de forma modular.
* Centraliza el manejo de estados de la petición (datos obtenidos, estado de carga `loading` y manejo de excepciones o errores `error`).

### 🔀 Enrutamiento Avanzado (React Router)
La aplicación utiliza **React Router** para gestionar los diferentes módulos de la tienda como una Single Page Application (SPA):
* **Rutas Principales:** Navegación limpia entre el catálogo general, pantallas de login, registro y categorías.
* **Rutas Dinámicas:** Uso de parámetros en la URL (ej: `/product/:id`) para renderizar dinámicamente la vista de detalle de un producto específico basándose en su identificador único.

---

## 🔌 API Consumida

La aplicación consume los servicios REST de [Fake Store API](https://fakestoreapi.com/), una API pública ideal para escenarios de comercio electrónico que provee recursos en formato JSON sobre:
* Autenticación de usuarios y login tokens.
* Alta y creación de nuevos usuarios.
* Listado general y detalles específicos por producto.
* Filtros de productos pertenecientes a categorías específicas.

---

## 💻 Instalación y Ejecución Local

Este proyecto está configurado para ejecutarse con **Bun** de forma independiente, garantizando una instalación de dependencias ultra rápida y un entorno de desarrollo seguro.

### Prerrequisitos
Asegúrate de tener instalado [Bun](https://bun.sh/) en tu máquina:
```bash
bun --version
