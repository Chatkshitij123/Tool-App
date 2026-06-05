const PopularRoutesTable = ({
  trips,
}) => {
  const routeMap = {};

  trips.forEach(
    (trip) => {
      const key =
        `${trip.from}-${trip.to}`;

      routeMap[key] =
        (routeMap[key] || 0) +
        1;
    }
  );

  const routes =
    Object.entries(
      routeMap
    ).sort(
      (a, b) =>
        b[1] - a[1]
    );

  return (
    <div className="admin-card">

      <h2>
        Popular Routes
      </h2>

      {routes
        .slice(0, 5)
        .map(
          (
            route
          ) => (
            <div
              key={
                route[0]
              }
            >
              {route[0]}
              {" "}
              (
              {route[1]}
              )
            </div>
          )
        )}

    </div>
  );
};

export default PopularRoutesTable;