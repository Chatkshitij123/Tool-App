const TripCard = ({
  trip,
  onDelete,
}) => {
  return (
    <div className="trip-card">

      <div>
        <h3>
          {trip.from} →
          {" "}
          {trip.to}
        </h3>

        <p>
          Distance:
          {" "}
          {trip.distance}
          {" "}
          km
        </p>

        <p>
          Toll:
          {" "}
          ₹{trip.tollCost}
        </p>
      </div>

      <button
        onClick={() =>
          onDelete(
            trip.id
          )
        }
      >
        Delete
      </button>

    </div>
  );
};

export default TripCard;