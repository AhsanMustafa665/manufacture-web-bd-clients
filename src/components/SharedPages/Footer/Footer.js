import React from "react";
import play from "../../Assests/Images/Stores/play-store.png";
import app from "../../Assests/Images/Stores/app-store.png";
import visa from "../../Assests/Images/Stores/visa.png";
import master from "../../Assests/Images/Stores/master.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        {/* <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div> */}
        <div>
          <span class="footer-title">Social</span>
          <a class="link link-hover">Twitter</a>
          <a class="link link-hover">Instagram</a>
          <a class="link link-hover">Facebook</a>
          <a class="link link-hover">Github</a>
        </div>
        <div>
          <span class="footer-title">Explore</span>
          <a class="link link-hover">Features</a>
          <a class="link link-hover">Enterprise</a>
          <a class="link link-hover">Security</a>
          <a class="link link-hover">Pricing</a>
        </div>
        <div>
          <span class="footer-title">Apps</span>
          <a class="link link-hover">Mac</a>
          <a class="link link-hover">Windows</a>
          <a class="link link-hover">iPhone</a>
          <a class="link link-hover">Android</a>
        </div>
        <div className="d-flex">
          <h3>PAY WITH</h3>
          <img className="w-16" src={master} alt="" />
          <img className="w-16" src={visa} alt="" />
        </div>
      </footer>

      <h6 className="text-center pb-6 bg-neutral text-white">
        Copyright © {new Date().getFullYear()} | All Rights Reserved by AHSAN
      </h6>
    </>
  );
};

export default Footer;
