import "./App.css";
import { children } from "react";
import User, { loader as userLoader } from "./routes/User";
import Users, { loader as usersLoader } from "./routes/Users";
import Albums, { loader as albumsLoader } from "./routes/Albums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import "./dist/output.css";
import Album, { loader as albumLoader } from "./routes/Album";
import Err from "./routes/Err";
import NoUser from "./routes/NoUser";
import NoAlbum from "./routes/NoAlbum.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "/users",
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: "/users/:id",
        errorElement: <NoUser />,
        loader: userLoader,
        element: <User />,
      },
      {
        path: "/albums/:id",
        loader: albumLoader,
        errorElement: <NoAlbum/>,
        element: <Album />,
      },
      {
        path: "*",
        element: <Err />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
