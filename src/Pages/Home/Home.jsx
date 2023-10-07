import Banner from "../../Components/Banner/Banner";
import CustomerReview from "../../Components/CustomerReveiw/CustomerReview";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";
import UpcommingEvents from "../../Components/UpcommingEvents/UpcommingEvents";



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="mt-8 md:mt-16 lg:mt-16">

            <Services></Services>
            
            </div>

            <div className="mt-8 md:mt-16 lg:mt-24">
                <UpcommingEvents></UpcommingEvents>
            </div>

            <div className="mt-8 md:mt-16 lg:mt-24">

                <CustomerReview></CustomerReview>

            </div>

            <div className="mt-8 md:mt-16 lg:mt-24">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;