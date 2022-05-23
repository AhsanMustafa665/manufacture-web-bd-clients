import React from "react";
import man from "../../Assests/Images/background/man.png";
import bg from "../../Assests/Images/background/tools-bg.png";

const ToolsWork = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
      }}
      className="flex justify-center items-center mt-56"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-90px] ml-10" src={man} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-secondary text-4xl font-bold">
          Hello I'm Tools Manager
        </h3>
        <h2 className="text-3xl text-white py-5">
          Make sure you want to computer repair?
        </h2>
        <p className="text-white pb-5">
          A computer repair technician is a person who repairs and maintains
          computers and servers. The technician's responsibilities may extend to
          include building or configuring new hardware, installing and updating
          software packages, and creating and maintaining computer networks.
        </p>
        <button className="btn btn bg-primary border-0 text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ToolsWork;
