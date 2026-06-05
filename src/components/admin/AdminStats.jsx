const AdminStats = ({
  users,
  trips,
}) => {
  return (
    <div className="stats-grid">

      <div className="stat-card">
        <h3>{users.length}</h3>
        <p>Total Users</p>
      </div>

      <div className="stat-card">
        <h3>{trips.length}</h3>
        <p>Total Trips</p>
      </div>

      <div className="stat-card">
        <h3>
          ₹
          {trips.reduce(
            (sum, trip) =>
              sum +
              Number(
                trip.tollCost || 0
              ),
            0
          )}
        </h3>
        <p>Total Toll</p>
      </div>

    </div>
  );
};

export default AdminStats;