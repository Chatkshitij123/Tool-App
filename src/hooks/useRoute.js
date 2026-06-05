import { useState } from "react";

import {
  geocodeCity,
} from "../services/routeService";

import {
  getRoute,
} from "../services/mapService";

import {
  calculateToll,
  calculateFuelCost,
  generateBreakdown,
} from "../services/tollService";

const useRoute = () => {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [result, setResult] =
    useState(null);

  const calculateRoute =
    async ({
      from,
      to,
      vehicleType,
    }) => {
      try {
        setLoading(true);
        setError("");

        const fromCoord =
          await geocodeCity(
            from
          );

        const toCoord =
          await geocodeCity(
            to
          );

        const route =
          await getRoute(
            fromCoord,
            toCoord
          );

        const tollCost =
          calculateToll(
            route.distance,
            vehicleType
          );

        const fuelCost =
          calculateFuelCost(
            route.distance
          );

        const tolls =
          generateBreakdown(
            tollCost
          );

        const routePoints =
          route.geometry.map(
            (
              point
            ) => [
              point[1],
              point[0],
            ]
          );

        setResult({
          tollCost,

          fuelCost,

          distance:
            route.distance.toFixed(
              1
            ),

          duration:
            route.duration.toFixed(
              1
            ) + " hrs",

          tolls,

          routePoints,

          fromCoord,

          toCoord,
        });
      } catch (err) {
        setError(
          err.message
        );
      } finally {
        setLoading(false);
      }
    };

  return {
    result,
    loading,
    error,
    calculateRoute,
  };
};

export default useRoute;