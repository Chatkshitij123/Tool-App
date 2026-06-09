import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  registerUser,
} from "../services/authService";

import "../styles/auth.css";

const Register = () => {
  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (
        name.trim().length < 3
      ) {
        alert(
          "Name must be at least 3 characters"
        );

        return;
      }

      if (
        password.length < 6
      ) {
        alert(
          "Password must be at least 6 characters"
        );

        return;
      }

      if (
        password !==
        confirmPassword
      ) {
        alert(
          "Passwords do not match"
        );

        return;
      }

      try {
        await registerUser(
          name,
          email,
          password
        );

        navigate(
          "/dashboard"
        );
      } catch (error) {
        console.error(
          error
        );

        alert(
          error.message
        );
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>
            Register
          </h1>

          <p>
            Create your TollGuru account
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={
            handleSubmit
          }
        >

          <input
            className="auth-input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            required
          />

          <input
            className="auth-input"
            type="email"
            placeholder="Email Address"
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

          <input
            className="auth-input"
            type="password"
            placeholder="Confirm Password"
            value={
              confirmPassword
            }
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            required
          />

          <button
            className="auth-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link
            className="auth-link"
            to="/login"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;