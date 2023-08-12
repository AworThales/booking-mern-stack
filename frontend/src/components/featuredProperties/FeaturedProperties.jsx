import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProperties() {
    const { data, loading, error } = useFetch("hotels?featured=true&limit=4");
    // console.log(data);
    
    return (
     <div className="featuredProperties">
        {loading ? ("Loading...")
        : (
        <>
            {data.map((item)=>(
            <div className="fPropsItem" key={item._id}>
                <img
                src={item.photos[0]}
                alt=""
                className="fPropsImg"
                />
                <span className="fPropsName">{item.name}</span>
                <span className="fPropsCity">{item.city}</span>
                <span className="fPropsPrice">Starting from N{item.cheapestPrice}</span>
                {item.rating && <div className="fPropsRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div>
            ))}
        </>
        )}
     </div>
    );
  }