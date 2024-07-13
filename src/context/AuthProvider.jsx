import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext(null);
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(()=> JSON.parse(localStorage.getItem("user")));

  const login = (newUser, callback) => {
    setUser(newUser);
    callback();
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
