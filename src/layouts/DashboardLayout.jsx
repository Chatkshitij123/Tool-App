import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const DashboardLayout =
  () => {
    return (
      <>
        <Navbar />

        <main className="dashboard-page">
          <Outlet />
        </main>

        <Footer />
      </>
    );
  };

export default DashboardLayout;