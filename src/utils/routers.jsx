import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Browse from "../components/Browse/Browse";
import App from "../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,      // 👈 default route "/"
        element: <Login />,
      },
      {
        path: "browse",   // 👈 no leading slash
        element: <Browse />,
      },
    ],
  },
]);

export default Router;
