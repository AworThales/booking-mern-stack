import "./hotel.css";
import NavBar from "../../components/navbar/NavBar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hotel() {
   const [slideNumber, setSlideNumber] = useState(0);
   const [openSlider, setOpenSlider] = useState(true);

   const photos = [
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      },
      
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      },
      
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      },
    ];

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
        <div className="hotelContainer">
            { openSlider && <div className="slider">
               <FontAwesomeIcon className="close" icon={faCircleXmark} onClick={()=> setOpenSlider(false)}/>
               <FontAwesomeIcon onClick={() => handleMove("l")} className="arrow" icon={faCircleArrowLeft}/>
               <div className="sliderWrapper">
                  <img src={photos[slideNumber].src} alt="" className="sliderImg" />
               </div>
               <FontAwesomeIcon onClick={() => handleMove("r")} className="arrow" icon={faCircleArrowRight}/>
            </div>}
            <div className="hotelWrapper">
               <button className="bookNow">Reserve or Book Now!</button>
               <h className="hotelTitle">Obassi Hotels & Resort</h>
               <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot}/>
                  <span>Calabar Ikom Highway by Akamkpa</span>
               </div>
               <span className="hotelDistance">Excellent Location - 40km from Calabar</span>
               <span className="hotelPriceHighlight">
                  Book a stay over N30,000 at this property and get a free airport taxi
               </span>
               <div className="hotelImages">
                  {photos.map((photo, i) =>(
                     <div className="hotelImgWrapper">
                        <img onClick= {()=> handleOpenSlider(i)} className="hotelImg" src={photo.src} alt="" />
                     </div>
                  )
                  ) }
               </div>
               <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                     <h1 className="hotelTitle">Stay in the heart of City</h1>
                     <p className="hotelDesc">
                        Located a 5-minute walk from St. John's in Akamkpa, Obassi
                        Hotel Apartments has accommodations with air conditioning and
                        free WiFi. The units come with hardwood floors and feature a
                        fully equipped kitchenette with a microwave, a flat-screen TV,
                        and a private bathroom with shower and a hairdryer. A fridge is
                        also offered, as well as an electric tea pot and a coffee
                        machine. Popular points of interest near the apartment include
                        Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                        airport is Margret Ekpo International Airport, Calabar Municipal–Calabar, 40 km
                        from Tower Street Apartments, and the property offers a paid
                        airport shuttle service.
                     </p>
                  </div>
                  <div className="hoteldetailsPrice">
                     <h1>Perfect for a 9-night stay!</h1>
                     <span>
                        Located in the real heart of Krakow, this property has an
                        excellent location score of 9.7!
                     </span>
                     <h2>
                        <b>N150,000</b> (9 nights)
                     </h2>
                     <button>Reserve or Book Now!</button>
                  </div>
               </div>
            </div>
            <MailList />
            <Footer />
        </div>
     </div>
    );
  }