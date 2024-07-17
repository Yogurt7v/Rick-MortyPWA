import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Login() {
  const location = useLocation();
  const auth = useAuth();
  const form = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(user, () =>
      navigate(location.state?.from || "/", { replace: true })
    );
    form.current.reset();
  };

  return (
    <div className="form__wrapper">
      <form
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      >
        <TextField
          id="filled-basic"
          label="UserName"
          variant="filled"
          color="success"
          name="username"
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          color="success"
        />
        <Button type="submit" variant="contained" color="success">
          Войти
        </Button>
      </form>
    </div>
  );
}
