import "./hotel.css";
import NavBar from "../../components/navbar/NavBar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/searchContext";

export default function Hotel() {
   const [slideNumber, setSlideNumber] = useState(0);
   const [openSlider, setOpenSlider] = useState(false);

   const location = useLocation();
   const id = location.pathname.split("/")[2];

   //Fetching data from Api
   const { data, loading, error } = useFetch(`/hotels/find/${id}`);
   //  console.log(data);
   
   //Fetching datas using search context
   const { dates, options } = useContext(SearchContext);
    console.log(dates);

    // Calculating days
    const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) =>{
      const TimeDiff = Math.abs(date2.getTime() - date1.getTime());
      const DaysDiff = Math.ceil(TimeDiff / MILLISECOND_PER_DAY);
      return DaysDiff;
   };
   console.log(dayDifference(dates[0].endDate, dates[0].startDate));
   const days = (dayDifference(dates[0].endDate, dates[0].startDate));

    const handleOpenSlider = (i) => {
      setSlideNumber(i);
      setOpenSlider(true)
    }

    const handleMove = (direction) =>{
      let newSliderNumber;
      if(direction ==="l"){
         newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1
      }else{
         newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1
      }

      setSlideNumber(newSliderNumber);
    }

    return (
     <div className="hotel">
        <NavBar />
        <Header type="list"/>
        {loading ? ("Loading...") 
        : (
            <>
            <div className="hotelContainer">
                  { openSlider && <div className="slider">
                     <FontAwesomeIcon className="close" icon={faCircleXmark} onClick={()=> setOpenSlider(false)}/>
                     <FontAwesomeIcon onClick={() => handleMove("l")} className="arrow" icon={faCircleArrowLeft}/>
                     <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                     </div>
                     <FontAwesomeIcon onClick={() => handleMove("r")} className="arrow" icon={faCircleArrowRight}/>
                  </div>}
                  <div className="hotelWrapper">
                     <button className="bookNow">Reserve or Book Now!</button>
                     <h className="hotelTitle">{data.name}</h>
                     <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                     </div>
                     <span className="hotelDistance">Excellent Location - {data.distance}km from Calabar</span>
                     <span className="hotelPriceHighlight">
                        Book a stay over N{data.cheapestPrice} at this property and get a free airport taxi
                     </span>
                     <div className="hotelImages">
                        {data.photos?.map((photo, i) =>(
                           <div className="hotelImgWrapper">
                              <img onClick= {()=> handleOpenSlider(i)} className="hotelImg" src={photo} alt="" />
                           </div>
                        )
                        ) }
                     </div>
                     <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                           <h1 className="hotelTitle">{data.title}</h1>
                           <p className="hotelDesc">
                              {data.desc}
                           </p>
                        </div>
                        <div className="hoteldetailsPrice">
                           <h1>Perfect for a {days}-night stay!</h1>
                           <span>
                              Located in the real heart of Krakow, this property has an
                              excellent location score of 9.7!
                           </span>
                           <h2>
                              <b>N{days * data.cheapestPrice * options.room}</b> ({days}{" "} Nights)
                           </h2>
                           <button>Reserve or Book Now!</button>
                        </div>
                     </div>
                  </div>
                  <MailList />
                  <Footer />
            </div>
            </>
         )}
     </div>
    );
  }