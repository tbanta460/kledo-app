import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const AuthRestrict = {
  NEVER: 0,
  LOGGED_OUT: 1 << 0,
  LOGGED_IN: 1 << 1,
}

const AccessControl = ({
  children,
  forbidWhen = AuthRestrict.NEVER,
}) => {
  const { userData, data } = useAuth()
  const forbidsLoggedIn = forbidWhen === AuthRestrict.LOGGED_IN;
  const forbidsLoggedOut = forbidWhen === AuthRestrict.LOGGED_OUT;

  if (forbidsLoggedOut && (data?.jwt === undefined || data?.jwt === null)) {
    return <Navigate to="/login"/>
  } else if (forbidsLoggedIn && userData) {
    return <Navigate to="/dashboard" />
  }
  return <>{children}</>;
};

export default AccessControl;
