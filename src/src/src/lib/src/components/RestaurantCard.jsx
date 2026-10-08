export default function RestaurantCard({ restaurant, onOpen }) {
  return (
    <article className="restaurant-card">
      <div className="restaurant-image">
        {restaurant.image_url ? (
          <img
            src={restaurant.image_url}
            alt={restaurant.name}
          />
        ) : (
          <span>🍽️</span>
        )}
      </div>

      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>

        {restaurant.description && (
          <p>{restaurant.description}</p>
        )}

        {restaurant.location && (
          <small>{restaurant.location}</small>
        )}

        <button onClick={() => onOpen(restaurant)}>
          View Menu
        </button>
      </div>
    </article>
  );
}
