import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


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
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
