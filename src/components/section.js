import React from "react";
import "./styles.css";

const Section = ({ title, subtitle, dark, id }) => {
  return (
    <div className="p-4 ">
      <div className={"section" + (dark ? "section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1 className="text-2xl">{title}</h1>
          <p className="text-start">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
