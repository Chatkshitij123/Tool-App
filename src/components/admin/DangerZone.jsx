const DangerZone = () => {
  const handleClick =
    () => {
      alert(
        "Future feature"
      );
    };

  return (
    <div className="danger-zone">

      <h2>
        Danger Zone
      </h2>

      <button
        onClick={
          handleClick
        }
      >
        Clear Data
      </button>

    </div>
  );
};

export default DangerZone;