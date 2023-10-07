import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Our <span className="text-[#FF900E]">services</span></h1>

            <p className="text-center mt-6 lg:text-[18px]">We make your events smart & impactful by personalised event management <br /> services</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard key={service.id} service ={service}></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;