import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuth = !!localStorage.getItem("auth_token");

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
