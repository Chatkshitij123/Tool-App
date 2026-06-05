import ActivityItem from "./ActivityItem";

const ActivityLog = ({
  trips,
}) => {
  return (
    <div className="admin-card">

      <h2>
        Recent Activity
      </h2>

      {trips
        .slice(0, 10)
        .map((trip) => (
          <ActivityItem
            key={trip.id}
            trip={trip}
          />
        ))}

    </div>
  );
};

export default ActivityLog;