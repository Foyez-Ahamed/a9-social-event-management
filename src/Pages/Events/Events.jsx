import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import GalleryDetails from "../Gallery/GalleryDetails";


const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    return (
        <div>

<div className="hero h-[300px] object-cover mt-10" style= {{backgroundImage: 'url(https://i.ibb.co/924ZpD2/young-joyful-friends-celebrating.jpg)'}}>
     <div className="hero-overlay bg-opacity-80"></div>
     <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><span className="text-[#FF900E]">Events !</span></h1>
      </div>
     </div>
    </div>
            

            <div className="mt-10">
        <h1 className="text-center text-xl lg:text-4xl font-bold"><span className="text-[#FF900E]">Social </span> Events Management</h1>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {
            events.map(details => <GalleryDetails key={details.id} details ={details}></GalleryDetails>)
        }
     </div>

     <div className="mt-10">
        <Footer></Footer>
     </div>

        </div>
    );
};

export default Events;