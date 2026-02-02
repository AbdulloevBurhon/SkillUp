import { Outlet } from "react-router-dom";
import AuthHeader from "../components/Header/AuthHeader";

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
    </>
  );
}

export default AuthLayout;
