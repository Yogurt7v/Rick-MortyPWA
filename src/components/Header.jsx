import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="container">
      <NavLink to="/" className="logo"/>
    </div>
  );
}
