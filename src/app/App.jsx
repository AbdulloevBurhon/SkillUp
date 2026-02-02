import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import MainLayout from "../layout/MainLayout";
import ProfileLayout from "../layout/ProfileLayout";
import PrivateRoute from "../routes/PrivateRoute";
import AuthLayout from "../layout/AuthLayout";

import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/home";
import Profile from "../pages/profile/Profile";
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      /* AUTH */
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },

      /* PUBLIC */
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Navigate to="/home" replace /> },
          { path: "/home", element: <Home /> },
        ],
      },

      /* PRIVATE */
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <ProfileLayout />,
            children: [{ path: "/profile", element: <Profile /> }],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
