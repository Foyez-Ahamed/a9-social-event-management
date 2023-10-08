import { Link } from "react-router-dom";


const Login = () => {
    return (
<div>
<div className="flex justify-center items-center">

<div className="shadow-xl p-8 md:w-[450px] lg:w-[450px] rounded-xl">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6"> Login Here Please</h1>
</div>

{/* form start*/}
<form>

<div className="relative">
<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />

<label htmlFor="password">Password</label> <br />
<input type = "password" placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]"/>
 <br />

<h1 className="mt-3 cursor-pointer text-[#403F3F]">Forgot password ? </h1>

 {/* button  */}
<input type="submit" value= "Login" className=" btn w-[350px] md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#FF900E] text-white hover:bg-gray-600" />
</div>

</form>
{/* form end */}

{/* others content show here please */}
<div className="mt-5">
    <p>Do not have an account ? <Link to='/register' className="text-bold text-[#1877F2] text-md uppercase underline">Register</Link></p>
</div>

</div>
</div>
</div>
    );
};

export default Login;