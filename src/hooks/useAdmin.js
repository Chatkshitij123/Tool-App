import { useEffect, useState } from "react";

import {
  getAllUsers,
  getAllTrips,
} from "../services/adminService";

const useAdmin = () => {
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAdminData = async () => {
      try {
        const usersData =
          await getAllUsers();

        const tripsData =
          await getAllTrips();

        setUsers(usersData);
        setTrips(tripsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, []);

  return {
    users,
    trips,
    loading,
  };
};

export default useAdmin;