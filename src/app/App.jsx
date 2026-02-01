import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/home";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // ✅ Главная — Home
      { path: "/", element: <Navigate to="/home" replace /> }, // направляем на home

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/home", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
