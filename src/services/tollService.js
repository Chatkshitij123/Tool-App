const VEHICLE_RATES = {
  car: 1.2,
  lcv: 2,
  truck: 3.5,
};

const PLAZA_NAMES = [
  "Kherki Daula Toll",
  "Shahjahanpur Toll",
  "Dausa Toll",
  "Manoharpur Toll",
  "Kishangarh Toll",
];

export const calculateToll =
  (
    distance,
    vehicleType
  ) => {
    const rate =
      VEHICLE_RATES[
        vehicleType
      ] || 1;

    return Math.round(
      distance * rate
    );
  };

  export const calculateFuelCost =
  (distance) => {
    const mileage = 15;

    const fuelPrice = 105;

    return Math.round(
      (distance / mileage) *
        fuelPrice
    );
  };

  export const generateBreakdown =
  (totalToll) => {
    const count =
      Math.max(
        2,
        Math.min(
          5,
          Math.round(
            totalToll / 120
          )
        )
      );

    const tolls = [];

    let remaining =
      totalToll;

    for (
      let i = 0;
      i < count;
      i++
    ) {
      const amount =
        i === count - 1
          ? remaining
          : Math.round(
              totalToll /
                count
            );

      tolls.push({
        name: PLAZA_NAMES[i],
        price: amount,
      });

      remaining -= amount;
    }

    return tolls;
  };