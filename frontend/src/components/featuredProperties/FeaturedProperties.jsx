import "./featuredProperties.css";

export default function FeaturedProperties() {
    return (
     <div className="featuredProperties">
        <div className="fPropsItem">
            <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fPropsImg"
            />
            <span className="fPropsName">Obassi Hotel & Resort</span>
            <span className="fPropsCity">Akamkpa</span>
            <span className="fPropsPrice">Starting from N3000</span>
            <div className="fPropsRating">
            <button>8.8</button>
            <span>Excellent</span>
            </div>
        </div>
        <div className="fPropsItem">
            <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fPropsImg"
            />
            <span className="fPropsName">Orange Resort & Suites</span>
            <span className="fPropsCity">Akai-Effa, Calabar</span>
            <span className="fPropsPrice">Starting from N4000</span>
            <div className="fPropsRating">
            <button>9.5</button>
            <span>Exceptional</span>
            </div>
        </div>
        <div className="fPropsItem">
            <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="fPropsImg"
            />
            <span className="fPropsName">Metro Hotels</span>
            <span className="fPropsCity">Calabar Highway</span>
            <span className="fPropsPrice">Starting from N6000</span>
            <div className="fPropsRating">
            <button>8.7</button>
            <span>Excellent</span>
            </div>
        </div>
        <div className="fPropsItem">
            <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="fPropsImg"
            />
            <span className="fPropsName">Channel View Hotels</span>
            <span className="fPropsCity">MCC Calabar</span>
            <span className="fPropsPrice">Starting from N3500</span>
            <div className="fPropsRating">
            <button>8.9</button>
            <span>Excellent</span>
            </div>
      </div>
     </div>
    );
  }