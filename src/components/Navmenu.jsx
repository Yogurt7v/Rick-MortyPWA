import { NavLink, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./Header";

const AuthStatus = lazy(() =>
  import("./AuthStatus").then((module) => ({ default: module.AuthStatus }))
);

export function NavMenu() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AuthStatus />
        <div className="nav">
          <button >
            <NavLink to="/categories">Categories</NavLink>
          </button>
          <nav>
            <ul>
              <li>
              <button >
                <NavLink to="/categories/heroes">Heroes</NavLink>
              </button>
              </li>
              <li>
              <button  >
                <NavLink to="/categories/locations">Locations</NavLink>
              </button>
              </li>
              <li>
              <button  >
                <NavLink to="/categories/episodes">Episodes</NavLink>
              </button>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </Suspense>
    </>
  );
}
