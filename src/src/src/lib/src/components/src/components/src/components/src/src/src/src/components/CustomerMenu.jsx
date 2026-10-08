import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

export default function CustomerMenu() {
  const [cart, setCart] = useState([]);

  const demoItems = [
    {
      id: 1,
      name: "Chicken & Chips",
      description: "Grilled chicken served with crispy chips.",
      price: 65,
      is_available: true,
    },
    {
      id: 2,
      name: "Beef Burger",
      description: "Beef burger with chips.",
      price: 55,
      is_available: true,
    },
    {
      id: 3,
      name: "Soft Drink",
      description: "Cold 500ml soft drink.",
      price: 15,
      is_available: true,
    },
  ];

  function addToOrder(item) {
    setCart((current) => [...current, item]);
  }

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <section className="customer-menu">
      <div className="menu-header">
        <p className="eyebrow">WELCOME</p>
        <h1>Solwezi Restaurant</h1>
        <p>Fresh food. Simple ordering.</p>
      </div>

      <div className="menu-items">
        {demoItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAdd={addToOrder}
          />
        ))}
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>

        <p>
          {cart.length} item{cart.length === 1 ? "" : "s"}
        </p>

        <strong>Total: K{total.toFixed(2)}</strong>

        <button
          className="primary"
          disabled={cart.length === 0}
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
