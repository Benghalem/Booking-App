import "./searchItems.css"

const Searchitems = () => {
    return (
        <div className="SearchItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/377326512.jpg?k=5d8fa87d70b230de9fb29d69cac968d7715d7e133227da36420283e568c16cad&o=&hp=1" 
          alt="" className="siImg" />  
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
  }
  
  export default Searchitems;