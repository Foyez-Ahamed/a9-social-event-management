import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

     <div className="hero h-screen md:min-h-screen lg:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JqGrrK3/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs-1.jpg)'}}>
     <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-xl md:text-3xl lg:text-4xl font-bold text-white">Make your event stand out from the best!</h1>
      <p className="mb-5 text-white">From Wedding Functions to Birthday Parties , Anniversaries, Engagement parties, retirement parties and baby shower, We offer full range of Events Management Services that scale to your needs & budget.</p>

      <Link><button className=" lg:text-[16px] px-5 py-2 bg-[#FF900E] rounded-md text-white">JOIN US</button></Link>

    </div>
    </div>
    </div>

        </div>
    );
};

export default Banner;