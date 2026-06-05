import useAdmin from "../hooks/useAdmin";

import Loading from "../components/common/Loading";

import AdminStats from "../components/admin/AdminStats";

import UsersList from "../components/admin/UsersList";

import ActivityLog from "../components/admin/ActivityLog";

import PopularRoutesTable from "../components/admin/PopularRoutesTable";

import DangerZone from "../components/admin/DangerZone";

const Admin = () => {
  const {
    users,
    trips,
    loading,
  } = useAdmin();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">

      <h1>
        Admin Panel
      </h1>

      <AdminStats
        users={users}
        trips={trips}
      />

      <UsersList
        users={users}
      />

      <PopularRoutesTable
        trips={trips}
      />

      <ActivityLog
        trips={trips}
      />

      <DangerZone />

    </div>
  );
};

export default Admin;