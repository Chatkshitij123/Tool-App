import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";

import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(
        email,
        password
      );

      navigate(
        "/dashboard"
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Login</h1>

          <p>
            Welcome back to
            TollGuru
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button
            className="auth-btn"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link
            className="auth-link"
            to="/register"
          >
            Register
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;