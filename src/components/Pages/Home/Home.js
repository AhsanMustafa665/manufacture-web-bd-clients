import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools/Tools";
import ToolsWork from "./ToolsWork";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <ToolsWork></ToolsWork>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
