import React from "react";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

function SomeMore({ datares }) {
  return (
    <div className="container mt-5">
      <div className="online">
        {datares.map((item) => (
          <div>
            <div className="abc">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item?.info?.cloudinaryImageId
                  }
                ></img>
              <div className="again"></div>
              <p className="sale">
                {item?.info?.aggregatedDiscountInfoV3?.header +
                  item?.info?.aggregatedDiscountInfoV3?.subHeader}
              </p>
            </div>
            <div className="detele">
              <h2>{item?.info?.name}</h2>
              <p>
                <MdStars />
                {item?.info?.avgRating}
                <span>{item?.info?.sla?.slaString}</span>
              </p>
              <p className="itemName">{item?.info?.cuisines.join(" , ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SomeMore;
