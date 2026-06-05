import { useState } from "react";

const RouteCalculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    vehicleType: "car",
    avoidTolls: "false",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.from || !formData.to) {
      alert("Please enter both cities");
      return;
    }

    onCalculate(formData);
  };

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-card">

          <h2>
            <i className="fas fa-calculator"></i>
            {" "}Toll Calculator (India)
          </h2>

          <div className="search-form">

            <div className="input-group">
              <i className="fas fa-map-marker-alt"></i>
              <input
                type="text"
                name="from"
                placeholder="From city"
                value={formData.from}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <i className="fas fa-flag-checkered"></i>
              <input
                type="text"
                name="to"
                placeholder="To city"
                value={formData.to}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <i className="fas fa-car"></i>

              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option value="car">
                  Car / Jeep / Van
                </option>

                <option value="truck">
                  Bus / Truck
                </option>

                <option value="lcv">
                  Light Commercial Vehicle
                </option>
              </select>
            </div>

            <div className="input-group">
              <i className="fas fa-road"></i>

              <select
                name="avoidTolls"
                value={formData.avoidTolls}
                onChange={handleChange}
              >
                <option value="false">
                  Use Fastest Route
                </option>

                <option value="true">
                  Avoid Tolls
                </option>
              </select>
            </div>

            <button
              className="btn-primary"
              onClick={handleSubmit}
            >
              <i className="fas fa-search"></i>
              {" "}Calculate Route
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteCalculator;