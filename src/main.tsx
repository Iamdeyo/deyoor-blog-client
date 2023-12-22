import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./styles/index.css";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import SinglePost from "./pages/SinglePost.tsx";
import CreatePost from "./pages/CreatePost.tsx";
import Home from "./pages/Home.tsx";
import EditPost from "./pages/EditPost.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <SinglePost />,
      },
      {
        path: "post/:postId/edit",
        element: <EditPost />,
      },
      {
        path: "post/create",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
