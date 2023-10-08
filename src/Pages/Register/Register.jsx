import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
 <div className="flex justify-center">

<div className="shadow-xl p-8 md:w-[450px] lg:w-[450px] rounded-xl">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">Register Here Please</h1>
</div>

{/* form start*/}
<form>

<div className="relative">

<label htmlFor="name">Name</label> <br /> 
<input type= "Text"
 placeholder="enter your name..." name="name" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />

 {/* <label htmlFor="photoURL">Photo URL</label> <br /> 
<input type= "text"
 placeholder="Photo URL..." name="photoURL" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[400px] max-w-xs" /> <br />     */}

<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />

<label htmlFor="password">Password</label> <br />
<input type = "password" placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]"/>
 <br />

 <input type="checkbox" name="terms" id="terms" className="mt-5" />
 <label htmlFor="terms" className="ml-2">Accepted our <a href="" className="text-[#403F3F]">terms and conditions</a></label> <br />

 {/* button  */}
<input type="submit" value= "Register" className=" btn w-[350px] md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#FF900E] text-white hover:bg-gray-600" />
</div>

</form>
{/* form end */}

{/* others content show here please */}
<div className="mt-5">
    <p> Already have an account ? <Link to='/login' className="text-bold text-[#1877F2] text-md uppercase underline">Login</Link></p>
</div>

</div>
</div>
        </div>
    );
};

export default Register;