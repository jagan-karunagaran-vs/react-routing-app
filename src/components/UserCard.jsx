import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="user-card" onClick={() => navigate(`/users/${user.id}`)}>
      <div className="user-avatar">{initials}</div>
      <h3>{user.name}</h3>
      <span className="role-badge">{user.role}</span>
      <p className="city">📍 {user.city}</p>
      <div className="btn btn-primary">
        View Profile <span>→</span>
      </div>
    </div>
  );
}

export default UserCard;