import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  loginUser,
} from "../services/authService";

const Login = () => {
  const navigate =
    useNavigate();

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await loginUser(
          email,
          password
        );

        navigate(
          "/dashboard"
        );
      } catch (
        error
      ) {
        alert(
          error.message
        );
      }
    };

  return (
    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={
          handleSubmit
        }
      >
        <h2>
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
        >
          Login
        </button>
      </form>

    </div>
  );
};

export default Login;