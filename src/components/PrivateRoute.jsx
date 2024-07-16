import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import PropTypes from 'prop-types';

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();
  
  if (auth.user === null) {
    return (
        <Navigate to="/login" state={{ from: location.pathname }} replace />
    );
  }
  return children;
}
