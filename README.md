# TiendaReact

Proyecto de e-commerce simple hecho con **React + Vite + React Router**, con persistencia de productos en `localStorage`.

## 📦 Instalación

```bash
npm install
```

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

Abrí el link que te muestra la terminal (por defecto `http://localhost:5173`).

## 🏗️ Build de producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del proyecto

```
src/
  components/
    Header.jsx        # Barra de navegación, se repite en todas las páginas
    Footer.jsx         # Pie de página, se repite en todas las páginas
    ProductCard.jsx     # Tarjeta de producto usada en el Home
    ProductForm.jsx     # Formulario reutilizable para crear/editar (Admin)
  context/
    ProductContext.jsx  # Estado global de productos + persistencia en localStorage
  pages/
    Home.jsx            # Listado de productos
    ProductDetail.jsx   # Detalle de un producto (/product/:id)
    Admin.jsx           # Panel CRUD de productos (/admin)
  App.jsx               # Rutas + layout (Header/Footer fijos)
  main.jsx              # Punto de entrada, envuelve la app en BrowserRouter y ProductProvider
  index.css             # Estilos globales
```

## 🧩 Cómo funciona el CRUD

- Todos los productos viven en `ProductContext`, que expone `products`, `addProduct`, `updateProduct`, `deleteProduct` y `getProduct`.
- Cada vez que `products` cambia, se guarda automáticamente en `localStorage` (clave `"products"`).
- Al cargar la app, si `localStorage` ya tiene productos guardados, se usan esos; si está vacío, se cargan 3 productos de ejemplo (seed).
- El Home y el Detalle de Producto leen del mismo contexto que gestiona el Admin, así que cualquier producto creado/editado/eliminado en `/admin` se refleja automáticamente en `/` y en `/product/:id`.

## 👥 Trabajo en grupo con Git/GitHub

Sugerencia de flujo para el equipo:

1. Uno del grupo crea el repo en GitHub y sube este proyecto (`git init`, `git add .`, `git commit -m "Setup inicial"`, `git push`).
2. El resto clona el repo: `git clone <url-del-repo>`.
3. Cada integrante trabaja en una rama distinta por feature, por ejemplo:
   - `feature/home`
   - `feature/product-detail`
   - `feature/admin-crud`
4. Se van abriendo Pull Requests hacia `main` y revisando el código entre el equipo antes de mergear.
5. Evitar que dos personas toquen el mismo archivo al mismo tiempo para minimizar conflictos de merge.

## ✅ Checklist del challenge

- [x] Página Home
- [x] Página de Detalle de Producto
- [x] Panel de Administración con CRUD (crear, listar, editar, eliminar)
- [x] Header y Footer compartidos en todas las páginas
- [x] Persistencia en localStorage
- [x] Navegación con React Router
- [x] Componentes reutilizables (Header, Footer, ProductCard, ProductForm)
