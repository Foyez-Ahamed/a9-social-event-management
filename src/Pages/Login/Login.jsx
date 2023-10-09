import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from "react-hot-toast";

const Login = () => {

    const {userLogin, providerGoogle} = useContext(AuthContext);


    const [showPassIcon, setShowPassIcon] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        userLogin(email, password)
        .then(() => {
            e.target.reset();
            navigate( location?.state? location.state : '/')
        })
        .catch((error) => {
            toast.error('Invalid email or password! Please check it from registration', error.message);
            e.target.reset();
        })

    }


    const handleGoogleLogin = (googleLogin) => {
        googleLogin()
        .then(() => {
            navigate( location?.state? location.state : '/')

        })
        .catch(() => {
        })
    }

    return (
<div>
<div className="flex justify-center items-center">

<div className="shadow-xl p-8 md:w-[450px] lg:w-[450px] rounded-xl">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6"> Login Here Please</h1>
</div>


<form onSubmit={handleLogin}>

<div className="relative">
<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[320px] md:w-[390px] lg:w-[390px]" /> <br />

<label htmlFor="password">Password</label> <br />
<input type = {showPassIcon ? "text" : "password"} placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[320px] md:w-[390px] lg:w-[390px]"/>
 <br />

 <span onClick={() => setShowPassIcon(!showPassIcon)} className="cursor-pointer absolute right-[10px] top-[160px]">

 {
    showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
 }

 </span>

<h1 className="mt-3 cursor-pointer text-[#403F3F]">Forgot password ? </h1>

 
<input type="submit" value= "Login" className=" btn w-[320px] md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#FF900E] text-white hover:bg-gray-600" />
</div>
</form>

<button onClick={() => handleGoogleLogin(providerGoogle)} className= " bg-[#403F3F] flex gap-2 justify-center items-center w-full py-3 rounded-md mt-5 text-white hover:bg-[#FF900E] text-[15px] font-medium uppercase">Login with <FcGoogle className="text-xl"></FcGoogle></button>




<div className="mt-5">
    <p>Do not have an account ? <Link to='/register' className="text-bold text-[#1877F2] text-md uppercase underline">Register</Link></p>
</div>

</div>
</div>
</div>
    );
};

export default Login;