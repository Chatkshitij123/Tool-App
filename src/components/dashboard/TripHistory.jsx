import TripCard from "./TripCard";
import EmptyTrips from "./EmptyTrips";

const TripHistory = ({
  trips,
  onDelete,
}) => {

  if (
    !trips ||
    trips.length === 0
  ) {
    return (
      <EmptyTrips />
    );
  }

  return (
    <div className="trip-history">

      <h2>
        Recent Trips
      </h2>

      {trips.map(
        (trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
            onDelete={
              onDelete
            }
          />
        )
      )}

    </div>
  );
};

export default TripHistory;