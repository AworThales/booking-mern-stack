import "./searchItem.css";

export default function SearchItem() {
    return (
     <div className="searchItem">
       <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="searchImg"
      />
      <div className="searchDesc">
            <h1 className="searchTitle">Tower Street Apartments</h1>
            <span className="searchDistance">400m from center</span>
            <span className="searchTaxiOp">Free airport taxi</span>
            <span className="searchSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="searchFeatures">
            Entire studio • 2 bathroom • 25m² 1 full bed
            </span>
            <span className="searchCancelOp">Free cancellation </span>
            <span className="searchCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
      </div>
      <div className="searchDetails">
        <div className="searchRating">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="searchDetailTexts">
          <span className="searchPrice">N2000</span>
          <span className="searchTaxOp">Includes taxes and fees</span>
          <button className="searchCheckButton">See availability</button>
        </div>
      </div>
     </div>
    );
  }