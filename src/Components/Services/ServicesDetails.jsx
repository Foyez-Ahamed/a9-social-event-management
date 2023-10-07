import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";


const ServicesDetails = () => {

    const {id} = useParams();

    const idNum = parseInt(id);

    const services = useLoaderData();

    const servicesDetails = services.find(service => service.id === idNum);

    const {image, short_des, description} = servicesDetails || {};

    return (
        <div className="mt-10">

            <section>

                <h1 className="text-center text-xl lg:text-4xl font-bold"> Our Services <span className="text-[#FF900E]">Details</span></h1>

                <img className="mt-8 h-[400px] w-full object-cover" src= {image} alt="" />

                <p className="mt-5 text-xl font-bold">{short_des}</p>

                <p className="mt-5 text-[20px]">{description}</p>

                <div className="mt-8">
                <Link to='/contact'><button className=" lg:text-[16px] px-6 py-3 bg-[#FF900E] rounded-md text-white">Booking Now</button></Link>
                </div>


                <div className="mt-8">
                    <Footer></Footer>
                </div>

            </section>

        </div>
    );
};

export default ServicesDetails;