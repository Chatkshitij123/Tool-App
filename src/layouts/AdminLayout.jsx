import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const AdminLayout = () => {
  return (
    <>
      <Navbar />

      <main className="admin-page">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AdminLayout;