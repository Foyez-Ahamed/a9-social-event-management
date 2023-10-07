import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div>

            <section className="flex justify-between items-center">

                <div className="flex  items-center cursor-pointer">
                    <img className=" w-[70px] lg:w-[120px]" src={logo} alt="social-events-logo" />
                </div>

                <div className="flex items-center gap-2 lg:gap-6">

                    <nav>
                        <ul className="flex gap-3 lg:gap-6 text-[10px] lg:text-[16px]">
                            <NavLink to='/' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Home</li></NavLink>

                            <NavLink to='/about' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>About</li></NavLink>

                            <NavLink to='/events' className={({isActive, isPending}) => isActive? 'text-[#FF900E] underline' : isPending? 'pending' : ""}><li>Events</li></NavLink>
                            
                        </ul>
                    </nav>

                    <Link to='/login'><button className="px-2 py-1 text-[10px] lg:text-[16px] lg:px-5 lg:py-2 bg-[#FF900E] rounded-md text-white">Login</button></Link>

                </div>

            </section>
            
        </div>
    );
};

export default Navbar;