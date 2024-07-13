import { NavLink, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { Button } from "@mantine/core";

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
          <Button color="lime" size="compact-xl">
            <NavLink to="/categories">Categories</NavLink>
          </Button>
          <nav>
            <ul>
              <li>
              <Button color="lime" size="compact-xl">
                <NavLink to="/categories/heroes">Heroes</NavLink>
              </Button>
              </li>
              <li>
              <Button  color="lime" size="compact-xl">
                <NavLink to="/categories/locations">Locations</NavLink>
              </Button>
              </li>
              <li>
              <Button  color="lime" size="compact-xl">
                <NavLink to="/categories/episodes">Episodes</NavLink>
              </Button>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </Suspense>
    </>
  );
}
