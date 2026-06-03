import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-road icon"></i>
          <span>
            Toll<span style={{ color: "var(--accent)" }}>Guru</span>
          </span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          {user && <Link to="/dashboard">Dashboard</Link>}

          {user?.role === "admin" && (
            <Link to="/admin">Admin</Link>
          )}

          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;