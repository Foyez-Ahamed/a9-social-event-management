import { FaAddressCard  } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import Footer from '../../Components/Footer/Footer';


const Contact = () => {
    return (
        <div>

       <div className="hero h-[300px] object-cover mt-10" style= {{backgroundImage: 'url(https://i.ibb.co/MBtqtXy/8e5bca865732d013fd24b9e71bb0a5f9e06d279b-731x731.png)'}}>
       <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center  text-neutral-content">
      <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Contact<span className="text-[#FF900E]"> Us</span></h1>
      </div>
     </div>
      </div>

      <div className="mt-10">

      <div>
        <h1 className="text-center text-xl font-bold">Contact us if you need our services. We will be happy to make your events memorable!</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


   <div className="card bg-orange-400 text-primary-content">
   <div className="card-body text-white">
   <p className='text-4xl flex justify-end '><FaAddressCard></FaAddressCard></p>   
  <h2 className="card-title">Address</h2>
   <p className='text-white'>North tower, uttara, Dhaka1216</p>
  </div>
   </div>
  
   <div className="card bg-blue-500 text-primary-content">
  <div className="card-body text-white">
   <p className='text-4xl flex justify-end '><BiSolidPhoneCall></BiSolidPhoneCall></p>   
  <h2 className="card-title">Phone</h2>
  <p className='text-white'>+0080161414</p>
  </div>
  </div>

   <div className="card bg-gray-500 text-primary-content">
   <div className="card-body text-white">
    <p className='text-4xl flex justify-end '><AiFillHome></AiFillHome></p>   
   <h2 className="card-title">Email</h2>
   <p className='text-white'>foyez124@gmail.com</p>
  </div>
   </div>

      </div>
      </div>

     

       <div className='mt-16 flex flex-col md:flex-row lg:flex-row justify-between gap-6'>

       
        <div className='flex-1'>

         <h1 className='text-3xl'>Contact form</h1> 

         <div>

          <form> 

          <div className='flex gap-6 mt-6'>
          <input type="text" required placeholder="Your name" className="input input-bordered w-full max-w-xs" />
          <input type="Email" required placeholder="Your email" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className='flex gap-6 mt-6'>
          <input type="phone" required placeholder="Your phone" className="input input-bordered w-full max-w-xs" />
          <input type="text" required placeholder="where do you heard about us" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className='mt-6'>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your message' className="input input-bordered w-[400px] md:w-[500px] lg:w-[500px] h-[150px] "></textarea>
          </div>

        <div className='mt-10'>
        <input type="submit" value="Send message" required className="input input-bordered w-full bg-[#FF900E] text-white" />
        </div>

          </form>

         </div> 


        </div>
       
        <div className='flex-1'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.5355273180403!2d90.40312643970334!3d23.763937120129924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696769887033!5m2!1sen!2sbd" className='w-full h-screen' allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>

       </div>

       <div className='mt-10'>
        <Footer></Footer>
       </div>
            
        </div>
    );
};

export default Contact;