import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Table, Button, Image } from "react-bootstrap";
import { createOrder } from "../service/orders"; 

const money = (v) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" })
    .format(Number(v) || 0);

const CartView = () => {
  const navigate = useNavigate();
  const { cart, clear, removeItem } = useContext(CartContext);

  const safeCart = useMemo(
    () =>
      (Array.isArray(cart) ? cart : [])
        .filter((it) => it && it.id != null)
        .map((it) => ({
          ...it,
          price: Number(String(it.price).replace(/[^\d.]/g, "")) || 0,
          quantity: Number(String(it.quantity).replace(/[^\d.]/g, "")) || 0,
        })),
    [cart]
  );

  const total = useMemo(
    () => safeCart.reduce((acc, it) => acc + it.price * it.quantity, 0),
    [safeCart]
  );

  const handleClear = () => {
    Swal.fire({
      title: "¿Estás seguro de borrar todo el carrito?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Sí",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) clear();
      else if (result.isDenied) Swal.fire("No se borró el carrito", "", "info");
    });
  };

  const handleFinishPurchase = async () => {
    const { value: formValues, isConfirmed } = await Swal.fire({
      title: "Datos del comprador",
      html: `
        <div style="text-align:left">
          <label>Nombre</label>
          <input id="buyer-name" class="swal2-input" placeholder="Nombre y apellido" />
          <label>Email</label>
          <input id="buyer-email" type="email" class="swal2-input" placeholder="correo@ejemplo.com" />
          <label>Notas (opcional)</label>
          <textarea id="buyer-notes" class="swal2-textarea" rows="2" placeholder="Instrucciones de entrega u otros detalles"></textarea>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Confirmar compra",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const name = (document.getElementById("buyer-name") || {}).value?.trim();
        const email = (document.getElementById("buyer-email") || {}).value?.trim();
        const notes = (document.getElementById("buyer-notes") || {}).value?.trim();
        if (!name || !email) {
          Swal.showValidationMessage("Por favor ingresa nombre y email");
          return;
        }
        return { name, email, notes };
      },
    });

    if (!isConfirmed) return;

    try {
      const itemsForOrder = safeCart.map((it) => ({
        sku: it.id,                  
        name: it.name,
        price: Number(it.price),
        quantity: Number(it.quantity),
        category: it.category ?? it.categorySlug ?? "",
      }));

      const orderId = await createOrder({
        buyer: { name: formValues.name, email: formValues.email },
        items: itemsForOrder,
        total,
        notes: formValues.notes || undefined,
      });

      clear(); 

      const result = await Swal.fire({
        icon: "success",
        title: "¡Orden creada!",
        html: `
          <div style="text-align:left">
            <p><strong>ID de la orden:</strong><br/><code>${orderId}</code></p>
            <p><strong>Total:</strong> ${money(total)}</p>
            <p><strong>Cliente:</strong> ${formValues.name} (${formValues.email})</p>
          </div>
        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Ver detalles",
        denyButtonText: "Copiar ID",
        cancelButtonText: "Cerrar",
      });

      if (result.isDenied) {
        await navigator.clipboard.writeText(orderId);
        await Swal.fire("Copiado", "El ID de la orden fue copiado al portapapeles.", "success");
      } else if (result.isConfirmed) {
        navigate(`/order/${orderId}`);
      }
    } catch (e) {
      console.error(e);
      Swal.fire("Error", e.message || "No se pudo crear la orden", "error");
    }
  };

  if (safeCart.length === 0) {
    return (
      <div className="container py-4">
        <h1 className="mb-3">Carrito de compra</h1>
        <p>Tu carrito está vacío.</p>
        <Link className="btn btn-primary" to="/">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Carrito de compra</h1>

      <Table responsive hover>
        <thead>
          <tr>
            <th style={{ width: 100 }}></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cant.</th>
            <th>Subtotal</th>
            <th style={{ width: 80 }}></th>
          </tr>
        </thead>
        <tbody>
          {safeCart.map((item, idx) => {
            const subtotal = item.price * item.quantity;
            return (
              <tr key={item.id ?? `row-${idx}`}>
                <td>
                  <Image
                    src={item.img}
                    alt={item.name}
                    thumbnail
                    style={{ maxWidth: 80 }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{money(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{money(subtotal)}</td>
                <td className="text-end">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <strong className="fs-5">Total a pagar: {money(total)}</strong>
        <div className="d-flex gap-2">
          <Button variant="danger" onClick={handleClear}>Borrar Carrito</Button>
          {/* Antes: <Link to="/checkout">Terminar Compra</Link> */}
          <Button variant="success" onClick={handleFinishPurchase}>
            Terminar Compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
