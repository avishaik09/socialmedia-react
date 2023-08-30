import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import Protected from "./pages/auth/Protected";
import Messenger from "./pages/messenger/Messenger";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },

  {
    path: "/login",
    element: <Login /> ,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/messenger",
    element: <Protected>
      <Messenger />
    </Protected>,
  },
  {
    path: "/profile/:username",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
