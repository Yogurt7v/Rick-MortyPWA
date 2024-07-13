import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Button, TextInput } from '@mantine/core';


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
          <TextInput type="text" name="username" />
        </label>
        <label>
          Password:
          <TextInput type="password" name="password" />
        </label>
        <Button color="lime" size="lg" type="submit">Войти</Button>
      </form>
    </div>
  );
}
