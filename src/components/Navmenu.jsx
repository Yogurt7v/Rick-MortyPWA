import { NavLink, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthStatus = lazy(() =>
  import("./AuthStatus").then((module) => ({ default: module.AuthStatus }))
);

export function NavMenu() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AuthStatus />
          <div className="nav">
          <Button 
            variant="contained"
            color="success"
            onClick={() => navigate("/categories")}
          >
            Categories
          </Button>
          <nav>
            <ul>
              <li>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/categories/heroes")}
                >
                  Heroes
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/categories/locations")}
                >
                  Locations
                </Button>
              </li>
              <li>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/categories/episodes")}
                >
                  Episodes
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
