import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-code">404</div>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default NotFound;