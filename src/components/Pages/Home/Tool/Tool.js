import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { picture, name, price, description, minQuan, AvaQuan } = tool;
  const navigate = useNavigate();

  //   const navigateToolDetail = (_id) => {
  //     navigate(`/tool/${_id}`);
  //   };
  return (
    <div className="singal-tool">
      <img src={picture} alt="" />
      <div className="detail-bg">
        <h5 className="font-bold text-primary">{name}</h5>
        <p>
          <small className="text-left">{description}</small>
        </p>
        <h6>{minQuan}</h6>
        <h6>{AvaQuan}</h6>
        <h6 className="font-bold">Price: ${price}</h6>

        {/* <button onClick={() => navigateToolDetail(_id)}>Book Now 🛒</button> */}
      </div>
    </div>
  );
};

export default Tool;
