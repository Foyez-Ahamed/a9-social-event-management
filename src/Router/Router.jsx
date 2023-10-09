import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import ServicesDetails from "../Components/Services/ServicesDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import GalleryPrivateRoute from "./GalleryPrivateRoute/GalleryPrivateRoute";
import EventsPrivateRoute from "./EventsPrivateRoute/EventsPrivateRoute";


const MyCreatedRouter = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },

            {
                path : "/services/:id",
                element : <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader : () => fetch('/services.json')
            },

            {
                path : '/about',
                element : <About></About>
            },

            {
                path : '/events',
                element : <EventsPrivateRoute><Events></Events></EventsPrivateRoute>
            },

            {
                path : '/gallery',
                element : <GalleryPrivateRoute><Gallery></Gallery></GalleryPrivateRoute>
            },

            {
                path : '/contact',
                element : <Contact></Contact>
            },

            {
                path : '/login',
                element : <Login></Login>
            },

            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default MyCreatedRouter;