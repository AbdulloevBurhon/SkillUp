import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    element: <MainLayout />, // ВСЕГДА с Header
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
