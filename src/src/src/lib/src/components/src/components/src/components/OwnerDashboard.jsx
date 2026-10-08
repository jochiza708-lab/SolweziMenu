import { useState } from "react";

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    ["overview", "Overview"],
    ["menu", "Menu"],
    ["orders", "Orders"],
    ["settings", "Settings"],
  ];

  return (
    <section className="owner-dashboard">
      <header className="dashboard-header">
        <div>
          <span className="dashboard-label">RESTAURANT DASHBOARD</span>
          <h1>Manage your restaurant</h1>
        </div>

        <button className="dashboard-logout">
          Log out
        </button>
      </header>

      <nav className="dashboard-tabs">
        {tabs.map(([value, label]) => (
          <button
            key={value}
            className={activeTab === value ? "active" : ""}
            onClick={() => setActiveTab(value)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="dashboard-content">
        {activeTab === "overview" && (
          <div className="dashboard-grid">
            <div className="dashboard-stat">
              <span>Today's Orders</span>
              <strong>0</strong>
            </div>

            <div className="dashboard-stat">
              <span>Menu Items</span>
              <strong>0</strong>
            </div>

            <div className="dashboard-stat">
              <span>Pending Orders</span>
              <strong>0</strong>
            </div>
          </div>
        )}

        {activeTab === "menu" && (
          <div className="dashboard-panel">
            <h2>Menu Management</h2>
            <p>
              Add food, drinks, prices, availability and images.
            </p>

            <button className="primary">
              Add Menu Item
            </button>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="dashboard-panel">
            <h2>Orders</h2>
            <p>No orders yet.</p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="dashboard-panel">
            <h2>Restaurant Settings</h2>
            <p>
              Restaurant profile, contact information and QR menu
              settings will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
