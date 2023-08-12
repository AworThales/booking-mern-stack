import { Link } from "react-router-dom";
import "./searchItem.css";

export default function SearchItem({item}) {
    return (
     <div className="searchItem">
       <img
        src={item.photos[0]}
        alt=""
        className="searchImg"
      />
      <div className="searchDesc">
            <h1 className="searchTitle">{item.name}</h1>
            <span className="searchDistance">{item.distance}m from center</span>
            <span className="searchTaxiOp">Free airport taxi</span>
            <span className="searchSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="searchFeatures">
              {item.desc}
            </span>
            <span className="searchCancelOp">Free cancellation </span>
            <span className="searchCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
      </div>
      <div className="searchDetails">
        {item.rating && <div className="searchRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="searchDetailTexts">
          <span className="searchPrice">N{item.cheapestPrice}</span>
          <span className="searchTaxOp">Includes taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
            <button className="searchCheckButton">See availability</button>
          </Link>
        </div>
      </div>
     </div>
    );
  }