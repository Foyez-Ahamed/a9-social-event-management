import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const {user, userLogout, } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        userLogout()
        .then(() => {
            toast.success('Successfully logged out')
            navigate('/');
        })
        .catch()

    }



    return (
        <div>

            <section className="flex justify-between items-center">

                <div className="flex  items-center cursor-pointer">
                   <Link to='/'> <img className=" w-[70px] md:w-[100px] lg:w-[130px]" src={logo} alt="social-events-logo" /></Link>
                </div>

                <div className="flex items-center gap-2 lg:gap-6">

                    <nav>
                        <ul className="flex gap-3 lg:gap-6 text-[10px] md:text-[16px] lg:text-[16px]">
                            <NavLink to='/' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Home</li></NavLink>

                            <NavLink to='/about' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>About</li></NavLink>

                            <NavLink to='/gallery' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Gallery</li></NavLink>

                            <NavLink to='/events' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Events</li></NavLink>

                            <NavLink to='/contact' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Contact us</li></NavLink>

                            
                        </ul>
                    </nav>

                   {
                     user?.email ? <>
                     
                     <div className="dropdown dropdown-end">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                     <img src= {user.photoURL} />
                    </div>
                     </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                     <a className="justify-between">
                      {user.displayName}
                     </a>
                     </li>
                     <li><a>{user.email}</a></li>
                     <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                   </div>
                     </> :  
                     
                     <Link to='/login'><button className="px-2 py-1  text-[10px] md:text-[16px] lg:text-[16px] lg:px-5 lg:py-2 bg-[#FF900E] rounded-md text-white">Login</button></Link>
                   }

                </div>

            </section>
            
        </div>
    );
};

export default Navbar;




// <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
//   </div>
//   <div className="flex-none gap-2">
//     <div className="form-control">
//       <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//     </div>
//     <div className="dropdown dropdown-end">
//       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//         </div>
//       </label>
//       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>