import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const EventsPrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center mt-16"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default EventsPrivateRoute;