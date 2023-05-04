import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {format } from "date-fns";
import { DateRange } from 'react-date-range';
import Searchitems from "../../components/searchItems/Searchitems"

const List = () => {

  const location = useLocation();
  console.log(location)
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [opendate,setOpenDate] = useState(false);  
  const [options,setOptions] = useState(location.state.option);  
  
 
  

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listCountainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination/property name:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!opendate)}>{format (date[0].startDate, "MM/dd/yyyy")} to {format (date[0].endDate, "MM/dd/yyyy")}</span>
            {opendate && <DateRange 
            onChange= {item=> setDate([item.selection])} 
            minDate={new Date()} 
            ranges={date}
            />}
            
            </div>
            <div className="listItem">
              <label>Options</label>

              <div className="listOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText" >
                  Adult 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText" >
                  Children 
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText" >
                  Room 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
            <div className="listResult">
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            <Searchitems />
            
            </div>
        </div>
        
      </div>
    
    </div>
  )
}

export default List