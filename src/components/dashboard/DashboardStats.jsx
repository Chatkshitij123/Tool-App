import StatsCard from "./StatsCard";

const DashboardStats = ({
  trips,
}) => {

  const totalTrips =
    trips.length;

  const totalDistance =
    trips.reduce(
      (sum, trip) =>
        sum +
        Number(
          trip.distance || 0
        ),
      0
    );

  const totalSpent =
    trips.reduce(
      (sum, trip) =>
        sum +
        Number(
          trip.tollCost || 0
        ),
      0
    );

  const avgCost =
    totalTrips
      ? Math.round(
          totalSpent /
            totalTrips
        )
      : 0;

  return (
    <div className="stats-grid">

      <StatsCard
        icon="🗺️"
        value={totalTrips}
        label="Trips"
      />

      <StatsCard
        icon="📍"
        value={`${Math.round(
          totalDistance
        )} km`}
        label="Distance"
      />

      <StatsCard
        icon="💰"
        value={`₹${totalSpent}`}
        label="Toll Spent"
      />

      <StatsCard
        icon="📊"
        value={`₹${avgCost}`}
        label="Avg Toll"
      />

    </div>
  );
};

export default DashboardStats;