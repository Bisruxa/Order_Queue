import React from "react";
import { IoMdContact } from "react-icons/io";
function UserCard({ name, id, status }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 border w-72 flex h-16">
      <button className="mb-5 mr-2">
        <IoMdContact size={"25px"}/>
      </button>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <small className="text-gray-600">#ORD-{id}</small>
      </div>

      <button
        className={` font-semibold border rounded-lg px-3 h-10 mx-3 ${
          status === "Ready" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {status}
      </button>
    </div>
  );
}

export default UserCard;
