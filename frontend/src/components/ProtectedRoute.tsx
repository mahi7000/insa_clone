// src/components/ProtectedRoute.tsx
import ( type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return children;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
