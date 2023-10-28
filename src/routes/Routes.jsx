import AboutUs from "../pages/aboutUs/AboutUs";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import AddGalleryImage from "../pages/addGalleryImage/AddGalleryImage";
import ContactUs from "../pages/contactUs/ContactUs";
import DefaultLayout from "../layouts/DefaultLayout";
import FollowUs from "../pages/followUs/FollowUs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import LoginLayout from "../layouts/LoginLayout";
import NotFound from "../pages/notFound/NotFound";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Register from "../pages/register/Register";
import SingleCoffee from "../pages/singleCoffee/SingleCoffee";
import SingleGallery from "../pages/singleGallery/SingleGallery";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import UpdateCoffee from "../pages/updateCoffee/UpdateCoffee";
import UpdateGalleryData from "../pages/updateGalleryData/UpdateGalleryData";
import Users from "../pages/Users/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/coffees"),
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/gallery"),
      },
      {
        path: "/:id",
        element: <Home />,
        loader: ({ params }) =>
          fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/gallery/${params.id}`),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: (
          <PrivateRoute>
            <ContactUs />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/single-coffee/:id",
        element: <SingleCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/single-coffee/${params.id}`),
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/update-coffee/${params.id}`),
      },
      {
        path: "/add-gallery",
        element: <AddGalleryImage />,
      },
      {
        path: "/single-gallery/:id",
        element: <SingleGallery />,
        loader: ({ params }) =>
          fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/single-gallery/${params.id}`),
      },
      {
        path: "/update-gallery/:id",
        element: <UpdateGalleryData />,
        loader: ({ params }) =>
          fetch(`https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/update-gallery/${params.id}`),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://coffee-shop-server-nhr5ha8ny-bishwajit-pauls-projects.vercel.app/users"),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
]);

export default router;
