import {useState} from "react";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format } from "date-fns";
import { useNavigate } from "react-router-dom";




function Header({type}) {

  // date range header
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
// number of bade or rooms
    const [openOption, setOpenOption] = useState(false);
    const [option,setOptions] = useState({ 
        adult:1,
        children:0,
        room:1
    })

    
// adult children room
    const handleOption = (name, operation) =>{
      setOptions(prev =>{return {
        ...prev, [name]: operation === "d" ? option[name] - 1 : option[name] + 1, 
      }})

    };
// handel serch list 
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const handleSearch = (name) => {
      console.log(name)
      navigate("/hotels", {state: {destination, date, option}})
    }

  return (
    <div className="header">
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
            </div>
        </div>
    { type !== "list" &&
      <> 
          <h1 className="headerTitle">A lifetime of discounts? It's Genius. </h1>
            <p className="headerDesc"> Get rewarded for your travels - unlock instant savings of 10% or more with a free DZbooking account</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="headerSearchInput" 
                  onChange={e=> setDestination(e.target.value)}
                />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">
                  {format (date[0].startDate, "MM/dd/yyyy")} to {format (date[0].endDate, "MM/dd/yyyy")}
                </span>
                </div>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="datebok"
                    minDate={new Date()} 
                />}
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={()=> setOpenOption(!openOption)} className="headerSearchText" >{option.adult} adult {option.children} children {option.room} room </span>
                  {openOption && <div className="options" >
                      <div className="optionsItem">
                        <span className="optinText">Adult</span>
                        <div className="optionCounter">
                          <button 
                          disabled={option.adult <=1}
                          className="optionCounterButton" 
                          onClick={()=>handleOption("adult", "d")}>-</button>
                          <span className="optionCounterNumber">1</span>
                          <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optinText">Children</span>
                        <div className="optionCounter">
                          <button 
                          disabled={option.children <=0}
                          className="optionCounterButton"  
                          onClick={()=>handleOption("children", "d")}>-</button>
                          <span className="optionCounterNumber">0</span>
                          <button className="optionCounterButton"  onClick={()=>handleOption("children", "i")}>+</button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optinText">Room</span>
                        <div className="optionCounter">
                          <button 
                          disabled={option.room <=1}
                          className="optionCounterButton" 
                          onClick={()=>handleOption("room", "d")}>-</button>
                          <span className="optionCounterNumber">1</span>
                          <button className="optionCounterButton"   onClick={()=>handleOption("room", "i")}>+</button>
                        </div>
                      </div>
                    </div> }
                </div>
                <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div> 
        </>
      }
      </div>
    </div>
  )
}

export default Header