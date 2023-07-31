import "./header.css";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

export default function Header() {
    const [ OpenDate, setOpenDate ] = useState(false);
    const [ date, setDate ] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [ options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) =>{
        setOptions(prev=>{
            return {
            ...prev, 
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }});
    }

    return (
     <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flight</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attraction</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airplain Taxi</span>
                </div>
            </div>
            <h1 className="headerTitle">A life time of discount? It's Genius</h1>
            <p className="headerDescription">
                Get rewared for your travels - unlock instant saving of 10%
                or more with a free Tbooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input className="headerSearchInput" type="text" placeholder="Where are you going?" />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={() =>setOpenDate(!OpenDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    { OpenDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button disabled={options.room <= 1} className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
     </div>
    );
  }