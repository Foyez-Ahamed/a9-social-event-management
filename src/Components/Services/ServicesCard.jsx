import { Link } from "react-router-dom";
import { FaShareAlt, FaHeart } from 'react-icons/fa';

const ServicesCard = ({service}) => {
    
    const {id, image, name, short_des, price} = service || {};
     

    return (
        <div>

<div className="card card-compact md:h-[440px] lg:h-[430px] shadow-xl">
  <figure> <img className="lg:h-[200px] w-full object-cover" src={image} alt="serviceImage" /></figure>
  <div className="card-body">
    <h2 className="card-title text-[20px]">{name}</h2>
    <p className=" text-[16px] text-justify">{short_des}</p>

   <div className="flex justify-between items-center gap-36 md:gap-32">
   <p className="font-bold"> Price : {price}</p>
   <p className="flex gap-3 cursor-pointer"><FaShareAlt></FaShareAlt> <FaHeart></FaHeart></p>
   </div>

    <div className="w-full">
      <Link to={`/services/${id}`} ><button className=" lg:text-[16px] px-4 py-3 bg-[#FF900E] rounded-md text-white w-full">See Details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServicesCard;