import { useEffect, useState } from "react";
import GalleryDetails from "./GalleryDetails";
import Footer from "../../Components/Footer/Footer";


const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    },[])

    

    return (
        <div>

    <div>
        <h1 className="text-center text-xl lg:text-4xl font-bold"><span className="text-[#FF900E]">Event </span>Gallery</h1>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {
            gallery.map(details => <GalleryDetails key={details.id} details ={details}></GalleryDetails>)
        }
     </div>

     <div className="mt-10">
        <Footer></Footer>
     </div>
            
        </div>
    );
};

export default Gallery;