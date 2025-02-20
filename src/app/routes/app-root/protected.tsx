import { Navigate } from "react-router";

export const ProtectedRouter = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
