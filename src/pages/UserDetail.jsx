import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="not-found">
        <div className="not-found-code">404</div>
        <h2>User Not Found</h2>
        <p>No user exists with ID: {id}</p>
        <button className="btn btn-primary" onClick={() => navigate("/users")}>
          ← Back to Users
        </button>
      </div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const details = [
    { label: "Age",   value: user.age,   icon: "🎂" },
    { label: "Role",  value: user.role,  icon: "💼" },
    { label: "Email", value: user.email, icon: "✉️" },
    { label: "City",  value: user.city,  icon: "📍" },
  ];

  return (
    <div className="user-detail-wrapper">

      <button className="btn btn-secondary" onClick={() => navigate("/users")}
        style={{ marginBottom: "28px" }}>
        ← Back to Users
      </button>

      <div className="user-detail-card">
        <div className="user-detail-header">
          <div className="user-detail-avatar">{initials}</div>
          <div>
            <h1>{user.name}</h1>
            <span className="role-badge">{user.role}</span>
          </div>
        </div>

        {details.map((d) => (
          <div className="detail-row" key={d.label}>
            <span className="detail-label">{d.label}</span>
            <span className="detail-value">{d.icon}&nbsp;&nbsp;{d.value}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default UserDetail;