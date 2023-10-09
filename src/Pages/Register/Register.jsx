import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {

    const {userRegister} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');

    const [showPassIcon, setShowPassIcon] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoURL = form.get('photoURL')
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.terms.checked;

        setRegisterError('');


        if(password.length < 6) {
            setRegisterError('Your password must have at least 6 character!');
            return;

        } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
            setRegisterError('Your password must have at least one capital letter and special character!');
            return;
        } else if(!accepted) {
            setRegisterError('Please accepted our terms and conditions');
            return;
        }

        userRegister(email, password)
        .then(() => {
            e.target.reset();
            navigate( location?.state? location.state : '/')
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL : photoURL
            })
            .then()
            .catch()
        })

        .catch(() => {
        })
        

    }

    return (
        <div>

<div className="flex justify-center">

<div className="shadow-xl p-8 md:w-[450px] lg:w-[450px] rounded-xl">

<div>
<h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">Register Here Please</h1>
</div>

{/* form start*/}
<form onSubmit={handleRegister}>

<div className="relative">

<label htmlFor="name">Name</label> <br /> 
<input type= "Text"
 placeholder="enter your name..." name="name" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />

 <label htmlFor="photoURL">Photo URL</label> <br /> 
<input type= "text"
 placeholder="Photo URL..." name="photoURL" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />    

<label htmlFor="email">Email address</label> <br /> 
<input type= "email"
 placeholder="enter your email..." name="email" required className=" mt-4 mb-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]" /> <br />

<label htmlFor="password">Password</label> <br />
<input type= {showPassIcon ? "text" : "password"} placeholder="enter your password" required name="password" className="mt-4 input bg-[#F3F3F3] w-[350px] md:w-[390px] lg:w-[390px]"/>
 <br />

 <span onClick={() => setShowPassIcon(!showPassIcon)} className="cursor-pointer absolute right-[10px] top-[265px]">

 {
    showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
 }

 </span>

 <input type="checkbox" name="terms" id="terms" className="mt-5" />
 <label htmlFor="terms" className="ml-2">Accepted our <a href="" className="text-[#403F3F]">terms and conditions</a></label> <br />

 {/* button  */}
<input type="submit" value= "Register" className=" btn w-[350px] md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#FF900E] text-white hover:bg-gray-600" />
</div>

</form>
{/* form end */}

<div className="mt-5">
    {
        registerError && <p className="text-red-600">{registerError}</p>
    }
</div>

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