export default function MenuItemCard({ item, onAdd }) {
  return (
    <article className="menu-item-card">
      <div className="menu-item-image">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
          />
        ) : (
          <span>🍽️</span>
        )}
      </div>

      <div className="menu-item-info">
        <h3>{item.name}</h3>

        {item.description && (
          <p>{item.description}</p>
        )}

        <strong>
          K{Number(item.price || 0).toFixed(2)}
        </strong>

        {item.is_available !== false && (
          <button onClick={() => onAdd(item)}>
            Add to Order
          </button>
        )}

        {item.is_available === false && (
          <span className="unavailable">
            Currently unavailable
          </span>
        )}
      </div>
    </article>
  );
}
