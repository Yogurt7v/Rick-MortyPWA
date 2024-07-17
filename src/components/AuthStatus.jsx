import { useAuth } from "../context/AuthProvider";
import {  useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => navigate("/", { replace: true }));
  };

  if (auth.user === null)
    return (
      <div className="AuthStatus" >
        <Button variant="contained" onClick={() => navigate("login")} color="success" size="small">Login, please
        </Button>
      </div>
    );
  return (
    <div className="AuthStatus">
      <p>
        Hello, <strong>{auth.user.username}</strong>!
      </p>
      <Button  onClick={handleLogout} variant="outlined" color="success" size="small">
        Logout
      </Button>
    </div>
  );
}
