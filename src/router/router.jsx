import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "../router/PrivateRoute";
import ServiceBook from "../Pages/ServiceDetails/ServiceBook";
import BookedServices from "./../Pages/BookedServices/BookedServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <div>Route Not Found</div>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/serviceBook/:id",
        element: (
          <PrivateRoute>
            <ServiceBook />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/services/${params.id}`
          );
          const data = await response.json();
          console.log("Fetched service data:", data); 
          return data;
        },
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices />
          </PrivateRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
]);

export default router;
