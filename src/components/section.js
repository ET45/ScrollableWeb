import React from "react";

const Section = ({ title, subtitle, dark, id }) => {
  return (
    <div className={"section" + (dark ? "section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="text-2xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
