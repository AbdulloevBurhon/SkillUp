import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/home";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/home", element: <Home /> },

      // Проверка авторизации перед загрузкой профиля
      {
        path: "/profile",
        element: localStorage.getItem("auth_token") ? (
          <Profile />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
