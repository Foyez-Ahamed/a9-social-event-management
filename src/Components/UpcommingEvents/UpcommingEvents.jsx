import birthdayPartyPic from "../../assets/birthday.jpg"
import { AiOutlineSchedule } from 'react-icons/ai';



const UpcommingEvents = () => {

    return (
        <div>
            <div className="text-center" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className="text-4xl font-bold">Our Upcoming <span className="text-[#FF900E]">Events</span></h1>
            <p className="text-center mt-6 lg:text-[18px]">We make your events smart & impactful by personalised event management <br /> services</p>
            </div>

       <div className="carousel w-full relative mt-8">

       <div id="item1" className="carousel-item w-full">

       <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>

       <img src={birthdayPartyPic} className="w-full h-[400px] object-cover"/>

      <div className="absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-white">

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="p-10 md:p-10 lg:p-0">
        <h1 className="text-4xl">Birthday parties Event</h1>

        <p className="mt-6 text-[12px]">Event management for birthday includes the art of designing an unforgettable celebration that honors individuals on their special day. From creating themes to coordinating surprise events, event management turns a random meeting into a unique experience.</p>
        </div>

        <div className="lg:mt-10 ml-10 lg:ml-0">
            <h1>More details</h1>
             <span className="flex gap-2 items-center"> <AiOutlineSchedule></AiOutlineSchedule> 32-B, Gulsan-2, Dhaka, Bangladesh</span>
             <span className="flex gap-2 items-center"> <AiOutlineSchedule></AiOutlineSchedule> October 19, 2023 6PM to 9PM</span>

        </div>
        </div>


      </div>

      </div> 

     </div> 

        </div>
    );
};

export default UpcommingEvents;