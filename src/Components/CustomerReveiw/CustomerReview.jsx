import customer1 from "../../assets/customer1.jpg"
import customer2 from "../../assets/customer2.jpg"
import customer3 from "../../assets/customer3.jpg"
import { AiFillStar } from 'react-icons/ai';

const CustomerReview = () => {
    return (
        <div>

            <section>
                <div className="text-center">
                <h1 className="text-4xl font-bold"> Customers <span className="text-[#FF900E]">Review</span></h1>

                <p className="text-center mt-6 lg:text-[18px]">We always try to give our best service on every single events</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            <div className="card shadow-md">
              <figure className="px-10 pt-10">
              <img src={customer1} alt="Shoes" className=" w-[80px] h-[80px] rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Salay Ahamed</h2>
            <span className="text-[14px]">Dhaka, Bangladesh</span>
            <p>Their service absolutely outstanding. They are so sincere</p>

            <p className="flex gap-1"><AiFillStar className="text-[#FF900E]">
                </AiFillStar >
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar> </p>
        </div>

            </div>


            <div className="card shadow-md">
              <figure className="px-10 pt-10">
              <img src={customer3} alt="Shoes" className=" w-[80px] h-[80px] rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Nesar Ahamed</h2>
            <span className="text-[14px]">Chandpur, Bangladesh</span>
            <p>I have experienced their birthday party events ! Good !</p>

            <p className="flex gap-1"><AiFillStar className="text-[#FF900E]">
                </AiFillStar >
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar></AiFillStar> </p>
           </div>
            </div>


            <div className="card shadow-md">
              <figure className="px-10 pt-10">
              <img src={customer2} alt="Shoes" className=" w-[80px] h-[80px] rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Akteruzzaman</h2>
            <span className="text-[14px]">Chittagong, Bangladesh</span>
            <p>Specially their weeding events absolutely so far so good !</p>

            <p className="flex gap-1"><AiFillStar className="text-[#FF900E]">
                </AiFillStar >
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar>
                <AiFillStar className="text-[#FF900E]"></AiFillStar> </p>
        </div>

            </div>

                </div>
            </section>
            
        </div>
    );
};

export default CustomerReview;