import React from "react";
import Oops from "../Assests/Images/404/404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "40%" }} src={Oops} alt="/" />
    </div>
  );
};

export default NotFound;
