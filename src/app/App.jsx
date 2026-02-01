import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    element: <MainLayout />, // Header всегда
    children: [
      // 👉 Redirect с / на /login
      { path: "/", element: <Navigate to="/login" replace /> },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
