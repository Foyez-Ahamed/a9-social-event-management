

const GalleryDetails = ({details}) => {
    
    const {image, name, short_des} = details || {};

    return (
        <div>

<div className="card  bg-base-100 shadow-xl image-full">
  <figure><img className="lg:h-[400px]" src={image} alt="Shoes" /></figure>
  <div className="card-body mt-10">
    <h2 className="card-title">{name}</h2>
    <p>{short_des}</p>
  </div>
</div>
            
        </div>
    );
};

export default GalleryDetails;