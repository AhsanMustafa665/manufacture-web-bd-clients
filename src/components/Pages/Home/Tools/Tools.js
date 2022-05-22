import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div id="tools-service" className="container">
      <h2 className="tools-title mt-5 text-center mb-0">My Services</h2>
      <div className="tools-container">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
