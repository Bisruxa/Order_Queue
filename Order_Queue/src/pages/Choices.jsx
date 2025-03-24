import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
function Choices({ items,type ,Icon}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 border  flex items-center justify-center">
      <div>
        <div className="flex ">
          <button className=" mb-5 mr-4 ">
            {/* <IoFastFoodOutline color="brown" size={"25px"} /> */}{
              Icon
            }
          </button>
          <div>
            <h3 className="text-lg ">{type}</h3>
            <small className="text-gray-600">{items}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choices;
