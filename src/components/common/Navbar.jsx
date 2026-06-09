import {
  Link,
} from "react-router-dom";

import {
  useAuth,
} from "../../hooks/useAuth";

import {
  logoutUser,
} from "../../services/authService";

const Navbar = () => {
  const {
    firebaseUser,
    role,
  } = useAuth();

  const handleLogout =
    async () => {
      await logoutUser();
    };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <i className="fas fa-road"></i>

          <span>
            Toll
            <span
              style={{
                color:
                  "var(--accent)",
              }}
            >
              Guru
            </span>
          </span>
        </div>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          {!firebaseUser && (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}

          {firebaseUser && (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              {role ===
                "admin" && (
                <Link to="/admin">
                  Admin
                </Link>
              )}

              <button
                className="btn btn-primary"
                onClick={
                  handleLogout
                }
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;