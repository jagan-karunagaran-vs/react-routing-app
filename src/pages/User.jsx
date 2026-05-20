import users from "../data/users";
import UserCard from "../components/UserCard";

function User() {
  return (
    <div>
      <div className="page-header">
        <span className="hero-badge">{users.length} Members</span>
        <h1>Meet the Team</h1>
        <p>
          Explore the talented individuals behind this project and discover the people shaping the experience. Browse through profiles, learn about their roles, and click any card to view detailed information about each team member.
        </p>
      </div>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default User;