import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
                path : '/about',
                element : <About></About>
            },

            {
                path : '/events',
                element : <Events></Events>
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