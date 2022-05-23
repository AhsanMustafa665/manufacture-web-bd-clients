import React from "react";
import play from "../../Assests/Images/Stores/play-store.png";
import app from "../../Assests/Images/Stores/app-store.png";
import visa from "../../Assests/Images/Stores/visa.png";
import master from "../../Assests/Images/Stores/master.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black mt-20  text-slate-50">
      <h6 style={{ textAlign: "center" }}>
        Copyright © {new Date().getFullYear()} | All Rights Reserved by AHSAN
      </h6>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="ml-10">
          <p>Read my blog</p>
          <p>Read FAQs</p>
          <p>Get help</p>
          <p>Add your Collection</p>
          <p>Computer all parts</p>
        </div>
        <div className="mr-10">
          <img src={play} className="w-28" alt="" />
          <img src={app} className="w-28" alt="" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-center">PAY WITH</h4>
      </div>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <img className="w-20" src={master} alt="" />
          <img className="w-20" src={visa} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
