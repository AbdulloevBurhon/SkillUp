import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "../layout/layout";

import Login from "../pages/login";
import Home from "../pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { index: true, element: <Navigate to="/login" /> },

        { path: "login", element: <Login /> },

        { path: "home", element: <Home /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
