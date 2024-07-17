import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavMenu } from "./components/Navmenu";
import { AuthProvider } from "./context/AuthProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);

const MainLayout = lazy(() =>
  import("./components/MainLayout").then((module) => ({
    default: module.MainLayout,
  }))
);
const Categories = lazy(() =>
  import("./pages/Categories").then((module) => ({
    default: module.Categories,
  }))
);
const Heroes = lazy(() =>
  import("./pages/Heroes").then((module) => ({
    default: module.Heroes,
  }))
);

const Episodes = lazy(() =>
  import("./pages/Episodes").then((module) => ({
    default: module.Episodes,
  }))
);
const Locations = lazy(() =>
  import("./pages/Locations").then((module) => ({
    default: module.Locations,
  }))
);
const Login = lazy(() =>
  import("./pages/Login").then((module) => ({ default: module.Login }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute").then((module) => ({
    default: module.PrivateRoute,
  }))
);
const SingleEpisode = lazy(() =>
  import("./components/SingleEpisode").then((module) => ({
    default: module.SingleEpisode,
  }))
);
const SingleHero = lazy(() =>
  import("./components/SingleHero").then((module) => ({
    default: module.SingleHero,
  }))
);
const SingleLocation = lazy(() =>
  import("./components/SingleLocation").then((module) => ({
    default: module.SingleLocation,
  }))
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<NavMenu />}>
                <Route index element={<Home />} />
                <Route path="/categories">
                  <Route index element={<Categories />} />
                  <Route path="heroes">
                    <Route index element={<Heroes />} />
                    <Route
                      path=":id"
                      element={
                        <PrivateRoute>
                          <SingleHero />
                        </PrivateRoute>
                      }
                    />
                  </Route>

                  <Route path="episodes">
                    <Route index element={<Episodes />} />
                    <Route
                      path=":id"
                      element={
                        <PrivateRoute>
                          <SingleEpisode />
                        </PrivateRoute>
                      }
                    />
                  </Route>
                  <Route path="locations">
                    <Route index element={<Locations />} />
                    <Route
                      path=":id"
                      element={
                        <PrivateRoute>
                          <SingleLocation />
                        </PrivateRoute>
                      }
                    />
                  </Route>
                </Route>
              </Route>
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <NotFound />
                  </Suspense>
                }
              />
              <Route
                path="login"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
