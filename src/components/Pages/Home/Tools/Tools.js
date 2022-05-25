import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch("https://secret-brushlands-38053.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div
      id="tools-service"
      className="container"
      data-theme={dark ? "dark" : "light"}
    >
      <h2 className="text-4xl text-center font-serif font-bold mt-36">
        <span className="text-secondary">Tools & kit</span> We Provide
      </h2>
      <p className="text-center">
        Why You Can Trust This Review — Our goal with this guide and review is
        to conduct all of when picking the best computer tool kit set for your
        needs.Best Reviews Guide analyzes and compares all Computer Tool Kits of
        2022. You can easily compare and choose from the 10 best Computer Tool
        Kits for you.
      </p>
      <input type="checkbox" onClick={() => setDark(!dark)} />

      <div className="tools-container">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
