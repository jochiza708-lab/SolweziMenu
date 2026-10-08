import { useState } from "react";
import OwnerDashboard from "./components/OwnerDashboard";
import CustomerMenu from "./components/CustomerMenu";

export default function App() {
  const [page, setPage] = useState("home");

  if (page === "owner") {
    return (
      <div>
        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back
        </button>

        <OwnerDashboard />
      </div>
    );
  }

  if (page === "menu") {
    return (
      <div>
        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Back
        </button>

        <CustomerMenu />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">SolweziMenu</div>

        <button
          className="login"
          onClick={() => setPage("owner")}
        >
          Restaurant Login
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            DIGITAL MENUS • ONLINE ORDERS
          </p>

          <h1>
            Your menu.
            <br />
            Your customers.
            <br />
            One simple system.
          </h1>

          <p className="description">
            SolweziMenu helps restaurants, bars, lodges, cafés and
            takeaways in Zambia create digital menus and receive orders
            without requiring customers to download an app.
          </p>

          <div className="buttons">
            <button
              className="primary"
              onClick={() => setPage("menu")}
            >
              View Demo Menu
            </button>

            <button
              className="secondary"
              onClick={() => setPage("owner")}
            >
              For Restaurant Owners
            </button>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <div className="icon">📱</div>
            <h2>QR Menu</h2>
            <p>
              Customers scan a QR code and open your menu instantly.
            </p>
          </div>

          <div className="feature">
            <div className="icon">🍽️</div>
            <h2>Easy Menu Management</h2>
            <p>
              Owners can manage items, prices, availability and food
              photos.
            </p>
          </div>

          <div className="feature">
            <div className="icon">🧾</div>
            <h2>Online Orders</h2>
            <p>
              Receive customer orders and manage them from the
              restaurant dashboard.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 SolweziMenu • Zambia</p>
      </footer>
    </div>
  );
}
