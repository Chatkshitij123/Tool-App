const routes = [
  ["Delhi", "Jaipur"],
  ["Mumbai", "Pune"],
  ["Delhi", "Chandigarh"],
  ["Bengaluru", "Chennai"],
  ["Kolkata", "Digha"],
  ["Hyderabad", "Vijayawada"],
];

const PopularRoutes = ({ onQuickRoute }) => {
  return (
    <section className="container popular-section">

      <h2 className="section-title">
        <i className="fas fa-star"></i>
        {" "}Popular Routes
      </h2>

      <div className="routes-grid">

        {routes.map((route, index) => (
          <div
            key={index}
            className="route-card"
            onClick={() =>
              onQuickRoute(route[0], route[1])
            }
          >
            <i className="fas fa-route"></i>

            {route[0]} → {route[1]}

            <small>
              Click for live toll
            </small>
          </div>
        ))}

      </div>

    </section>
  );
};

export default PopularRoutes;