const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Live Toll Costs{" "}
          <span className="gradient-text">
            Across India
          </span>
        </h1>

        <p>
          Real-time route & toll estimation —
          no sign-up required
        </p>

        <div className="stats-banner">

          <div className="stat">
            <span className="stat-number">
              70k+
            </span>
            <span className="stat-label">
              Routes Simulated
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">
              1200+
            </span>
            <span className="stat-label">
              Toll Plazas
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">
              Live
            </span>
            <span className="stat-label">
              Open Routing
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;