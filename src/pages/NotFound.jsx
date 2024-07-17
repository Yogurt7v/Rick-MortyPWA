import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div className="card__wrapper">
      <h1>Page Not Found</h1>
      <NavLink to="/">Go Back</NavLink>
    </div>
  );
}
