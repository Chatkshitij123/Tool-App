const AuthModal = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <span
          className="close"
          onClick={onClose}
        >
          &times;
        </span>

        <h2>
          Login / Sign Up
        </h2>

        <form>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AuthModal;