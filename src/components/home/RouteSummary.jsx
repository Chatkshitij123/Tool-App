const RouteSummary = ({
  tollCost,
  distance,
  duration,
  fuelCost,
}) => {
  return (
    <div className="summary-grid">

      <div className="summary-item">
        <span className="label">
          Total Toll Cost
        </span>

        <span className="value">
          ₹{tollCost}
        </span>
      </div>

      <div className="summary-item">
        <span className="label">
          Distance
        </span>

        <span className="value">
          {distance} km
        </span>
      </div>

      <div className="summary-item">
        <span className="label">
          Est. Time
        </span>

        <span className="value">
          {duration}
        </span>
      </div>

      <div className="summary-item">
        <span className="label">
          Est. Fuel
        </span>

        <span className="value">
          ₹{fuelCost}
        </span>
      </div>

    </div>
  );
};

export default RouteSummary;