import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <span className="hero-badge">A Modern React Experience by Jagan</span>

      <h1>Navigate Modern Experiences<span> Without Limits</span></h1>

      <p>
      Explore dynamic routing, smooth navigation, and responsive interfaces built with modern React technologies.
      </p>

      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => navigate("/users")}>
          Browse Users
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/about")}>
          Learn More
        </button>
      </div>

      <div className="hero-cards">
        <div className="hero-card">
          <span className="icon">🏠</span>
          <h3>Home</h3>
          <p>Your starting point. Clean layout, clear navigation.</p>
        </div>
        <div className="hero-card">
          <span className="icon">📖</span>
          <h3>About</h3>
          <p>Learn what this project is built with and why.</p>
        </div>
        <div className="hero-card">
          <span className="icon">👥</span>
          <h3>Users</h3>
          <p>Browse profiles with rich detail pages.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;