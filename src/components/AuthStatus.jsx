import { useAuth } from "../context/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate("/", { replace: true }));
  };

  if (auth.user === null)
    return (
      <div className="AuthStatus">
        <button >
          <NavLink to="login">Login, please</NavLink>
        </button>
      </div>
    );
  return (
    <div className="AuthStatus">
      <p>
        Hello, <strong>{auth.user.username}</strong>!
      </p>
      <button  onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
