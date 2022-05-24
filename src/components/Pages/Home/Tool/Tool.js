import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { _id, picture, name, price, description, minQuan, avaQuan } = tool;
  console.log("id its", _id);
  return (
    <div className="singal-tool">
      <img src={picture} alt="" />
      <div>
        <h1 className="font-bold text-secondary text-xl">{name}</h1>
        <br />
        <p>
          <small className="text-left font-serif text-left">
            {description}
          </small>
        </p>
        <br />
        <h6 className="font-semibold ">Minimum quantity: {minQuan} pcs</h6>
        <h6 className="font-semibold">Available quantity: {avaQuan} pcs</h6>
        <h5 className="font-bold ">Price: ${price}</h5>
        {/* <button  onClick={() => navigateToolDetail(_id)}>Book Now 🛒</button> */}
        <Link to={`/purchase/${_id}`}>Book Now 🛒</Link>
      </div>
    </div>
  );
};

export default Tool;
