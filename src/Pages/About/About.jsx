import Footer from "../../Components/Footer/Footer";
import anniversaryPic from "../../assets/anniversary.jpeg"
import birthdayWish from "../../assets/birthdayWish.jpg"
import goals from "../../assets/goals.jpeg"

const About = () => {
    return (
        <div>

    <div>
    <h1 className="text-center text-xl lg:text-4xl font-bold"> Who <span className="text-[#FF900E]">We are !</span></h1>
     </div>

      <div className="hero h-[300px] object-cover mt-10" style= {{backgroundImage: 'url(https://i.ibb.co/R0kdsdc/istockphoto-665659606-1024x1024.jpg)'}}>
     <div className="hero-overlay bg-opacity-80"></div>
     <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Why choice our <span className="text-[#FF900E]">events</span> ? </h1>
      </div>
     </div>
      </div>

    <div className="mt-10">

    <div className="text-center">
    <h1 className="text-4xl font-bold">We <span className="text-[#FF900E]">Create Events</span> That Lasts</h1>
    <p className="text-center mt-6 lg:text-[18px]">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, <br /> We offer full range of Events Management Services that scale to your needs & budget.</p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="card bg-base-100 h-[500px] shadow-md">
  <figure className="px-10 pt-10">
    <img src={birthdayWish} alt="birthday" className="rounded-xl w-full h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Our vision</h2>
    <p>Our mission is to ensure that every foster child and all children, regardless of personal or financial circumstances, has the opportunity to celebrate their</p>
  </div>
  </div>

  <div className="card bg-base-100 h-[500px] shadow-md">
  <figure className="px-10 pt-10">
    <img src={goals} alt="birthday" className="rounded-xl w-full h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Our Goals</h2>
    <p>Our Goals is to ensure that every foster child and all children, regardless of personal or financial circumstances, has the opportunity to celebrate their</p>
  </div>
  </div>


  <div className="card bg-base-100 h-[500px] shadow-md">
  <figure className="px-10 pt-10">
    <img  src={anniversaryPic} alt="birthday" className="rounded-xl w-full h-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Our Approach</h2>
    <p>ROI-driven events start with setting the right goals and objectives. Goals form the foundation of your event strategy and guide your planning. </p>
  </div>
  </div>

    </div>

    </div>

    <div className="mt-10">
        <Footer></Footer>
    </div>
            
        </div>
    );
};

export default About;