const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <i className="fas fa-exclamation-triangle"></i>

      {" "}

      {message}
    </div>
  );
};

export default ErrorCard;