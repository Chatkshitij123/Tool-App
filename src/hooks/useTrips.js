import { useEffect, useState, } from "react";
import { useAuth } from "./useAuth";
import {
  getTrips,
  deleteTrip,
} from "../services/tripService";

const useTrips = () => {
  const { user } = useAuth();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  

useEffect(() => {
  const fetchTrips = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await getTrips(user.uid);
      setTrips(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchTrips();
}, [user]);

  const removeTrip = async (tripId) => {
    await deleteTrip(tripId);

    setTrips((prev) =>
      prev.filter(
        (trip) => trip.id !== tripId
      )
    );
  };

  return {
    trips,
    loading,
    removeTrip,
  };
};

export default useTrips;