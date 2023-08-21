import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Reserve({setOpenModal, hotelId}) {
    const navigate = useNavigate();
    const [selectedRooms, setSelectedRooms] = useState([]);
    const {dates} = useContext(SearchContext);
    // console.log(dates);
    //Fetching data from Api
   const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
    // console.log(data);

    const getDatesInRange = (startDate, endDate) =>{
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list = [];
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1)
        };
        return list;
    };

    // console.log(getDatesInRange(dates[0].startDate, dates[0].endDate));
    const allDates = (getDatesInRange(dates[0].startDate, dates[0].endDate));

    const isAvailable = (roomNum) => {
        const isFound = roomNum.unavailableDates.some((date) =>
          allDates.includes(new Date(date).getTime())
        );
    
        return !isFound;
      };

    const handleSelect = (e) =>{
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item=> item !== value));
    };

    // console.log(selectedRooms)

    const handleClick = async () =>{
        try {
            //we are using Promise.all() becuase we are use map here
            await Promise.all(selectedRooms.map((roomId)=>{
                const res = axios.put(`/rooms/availability/${roomId}`, {dates: allDates});
                return res.data;
            }));
            setOpenModal(false);
            navigate("/");
        } catch (err) {}
    };

    return (
     <div className="reserve">
        <div className="reserveContainer">
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="reserveClose" 
                onClick={()=> setOpenModal(false)}
            />
            <span>Select your rooms:</span>
            {data.map((item) =>(
                <div className="reserveItem">
                    <div className="reserveInfo">
                        <div className="reserveTitle">{item.title}</div>
                        <div className="reserveDesc">{item.desc}</div>
                        <div className="reserveMax">Max People: <b>{item.maxPeople}</b></div>
                        <div className="reservePrice">Price: <b>{item.price}</b></div>
                    </div>
                    <div className="reserveSelectRoom">
                        {item.roomNumbers.map((roomNum)=>(
                            <div className="room">
                                    <label>{roomNum.number}</label>
                                    <input onChange={handleSelect} disabled={!isAvailable(roomNum)} type="checkbox" value={roomNum._id} />
                            </div>
                        ))}
                    </div>
                </div>
                ))}
                <button type="submit" className="reserveButton" onClick={handleClick}>Reserve Now!</button>
        </div>
     </div>
    );
  }