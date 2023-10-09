import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 md:px-16 lg:px-16 py-5  font-workSans">

            <Navbar></Navbar>

            <Outlet></Outlet>

            <Toaster/>

        </div>
    );
};

export default MainLayout;