# Fantasy Ferment Shop

Breve documentación del proyecto de e‑commerce artesanal construido con **React** y **Firebase (Firestore)**.

---

## 📌 Resumen

Aplicación web para explorar y comprar bebidas artesanales (cervezas, hidromieles, vinos y sidras). Incluye catálogo por categorías, detalle de producto, carrito de compras y **creación de órdenes** en Firestore con **ID automático**.

---

## 🧰 Tecnologías principales

* **Frontend:** React, React Router, React Bootstrap, CSS personalizado
* **Estado de carrito:** Context API (CartContext)
* **Backend as a Service:** Firebase (Firestore)
* **UX:** SweetAlert2 para modales de confirmación

---

## 🗂️ Estructura de archivos

```
src/
├─ components/
│  ├─ NavbarComponent.jsx
│  ├─ ItemsListContainer.jsx
│  ├─ ItemDetailContainer.jsx
│  ├─ CartView.jsx                 # Carrito y finalización de compra
│  ├─ OrderDetail.jsx              # Vista de detalle de orden
│  ├─ SeedProductsButton.jsx       # Sembrado inicial de productos (opcional/dev)
│  └─ NotFound.jsx
├─ context/
│  └─ CartContext.jsx
├─ services/
│  ├─ orders.js                    # createOrder(), getOrderById()
│  └─ seedProductsAutoId.js        # carga masiva con ID automático
├─ css/
│  └─ Custom.css
├─ firebase.js                     # init Firebase + getFirestore
└─ App.jsx                         # rutas y layout principal
```

---

## 🧭 Rutas

* `/` – Home, listado general
* `/categories/:category` – Catálogo filtrado por categoría (slug)
* `/item/:id` – Detalle de producto
* `/cart` – Carrito de compras
* `/admin/seed` – (opcional) Página de sembrado de productos en desarrollo
``