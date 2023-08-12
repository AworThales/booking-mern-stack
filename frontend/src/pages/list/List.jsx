import "./list.css";
import NavBar from "../../components/navbar/NavBar"
import Header from "../../components/header/Header"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

export default function List() {
   const location = useLocation();
   // console.log(location)
   const [destination, setDestination] = useState(location.state.destination);
   const [date, setDate] = useState(location.state.date);
   const [openDate, setOpenDate] = useState(false);
   const [options, setOptions] = useState(location.state.options);
   const [min, setMin] = useState(undefined);
   const [max, setMax] = useState(undefined);

   //Fetching data from Api
   const { data, loading, error, reFetcher } = useFetch(`hotels?city=${destination}&min=${min || 0 }&max=${max || 599}`);
    console.log(data);

    const handleClick = ()=>{
      reFetcher();
    };

    return (
     <div className="list">
        <NavBar />
        <Header type="list" />
        <div className="listContainer">
            <div className="listWrapper">
               <div className="listSearch">
                  <h1 className="listTitle">Search</h1>
                  <div className="listItem">
                     <label>Destination</label>
                     <input type="text" placeholder={destination}/>
                  </div>
                  <div className="listItem">
                     <label>Check-in date</label>
                     <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                     {openDate && <DateRange
                        onChange={(item) => setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}
                     />}
                  </div>
                  <div className="listItem">
                     <label>Options</label>
                     <div className="listOptions">
                        <div className="listOptionItem">
                           <span className="listOptionText">Min price <small>per night</small></span>
                           <input onChange={(e)=>setMin(e.target.value)} type="number" className="listOptionInput" />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Max price <small>per night</small></span>
                           <input onChange={(e)=>setMax(e.target.value)} type="number" className="listOptionInput" />
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Adult</span>
                           <input min={1} type="number" className="listOptionInput" placeholder={options.adult}/>
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Children</span>
                           <input min={0} type="number" className="listOptionInput" placeholder={options.children}/>
                        </div>
                        <div className="listOptionItem">
                           <span className="listOptionText">Room</span>
                           <input min={1} type="number" className="listOptionInput" placeholder={options.room}/>
                        </div>
                     </div>
                  </div>
                  <button onClick={handleClick}>Search</button>
               </div>
               <div className="listResult">
                  {loading ? ("loading..")
                  : (
                     <>
                        {data.map((item)=>(
                           <SearchItem item={item} key={item._id}/>
                        ))}
                     </>
                  )}
               </div>
            </div>
        </div>
     </div>
    );
  }