import DashboardStats from "../components/dashboard/DashboardStats";

import TripHistory from "../components/dashboard/TripHistory";

import useTrips from "../hooks/useTrips";

import Loading from "../components/common/Loading";

const Dashboard = () => {
  const {
    trips,
    loading,
    removeTrip,
  } = useTrips();

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="container">

      <h1>
        My Dashboard
      </h1>

      <DashboardStats
        trips={trips}
      />

      <TripHistory
        trips={trips}
        onDelete={
          removeTrip
        }
      />

    </div>
  );
};

export default Dashboard;