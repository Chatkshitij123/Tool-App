const TollBreakdown = ({
  tolls,
}) => {
  return (
    <>
      <p className="breakdown-title">
        Toll Breakdown
      </p>

      {tolls.map((toll, index) => (
        <div
          key={index}
          className="toll-item"
        >
          <div>
            {toll.name}
          </div>

          <div className="toll-price">
            ₹{toll.price}
          </div>
        </div>
      ))}
    </>
  );
};

export default TollBreakdown;