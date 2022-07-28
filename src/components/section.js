import React from "react";
import "./styles.css";

const Section = ({ title, subtitle, light, id }) => {
  return (
    <div className=" ">
      <div className={"section" + (light ? "section-light" : "")}>
        <div className="section-content" id={id}>
          <h1 className="text-2xl">{title}</h1>
          <p className="text-start">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
