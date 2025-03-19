import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../router/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Route Not Found</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services/:id", element: <PrivateRoute><ServiceDetails /></PrivateRoute>, 
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      { path: "/register", element: <Register /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
]);

export default router;
