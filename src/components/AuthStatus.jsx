import { useAuth } from "../context/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate("/", { replace: true }));
  };

  if (auth.user === null)
    return (
      <div className="AuthStatus">
        <Button variant="outline" color="lime">
          <NavLink to="login">Login, please</NavLink>
        </Button>
      </div>
    );
  return (
    <div className="AuthStatus">
      <p>
        Hello, <strong>{auth.user.username}</strong>!
      </p>
      <Button variant="outline" color="lime" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
