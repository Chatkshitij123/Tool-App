const ActivityItem = ({
  trip,
}) => {
  return (
    <div className="activity-item">

      <strong>
        {trip.from}
        {" → "}
        {trip.to}
      </strong>

      <span>
        ₹{trip.tollCost}
      </span>

    </div>
  );
};

export default ActivityItem;