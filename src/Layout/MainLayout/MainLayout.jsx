import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 md:px-16 lg:px-16 py-5 my-4 font-workSans">

            <Navbar></Navbar>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;