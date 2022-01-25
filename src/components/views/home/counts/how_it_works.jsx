import React from "react";
import "../style.scss";

export default function HowItWorks(props) {
  const data = props.data;

  const children = (icon, color, title, desc, isBackground) => {
    return (
      <div
        className={
          isBackground == true ? "child1 background-container" : "child1"
        }
      >
        <div className={isBackground ? "background-circle" : "circle"}>
          <span className="icon">
            {React.createElement(icon, { color: color, size: "5rem" })}
          </span>
        </div>
        <div className="content">
          <p className="shead">{title}</p>
          <p className="description">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="how-it-works">
      <p className="head home-page-head">How it works</p>
      <div className="spacer" />
      <div className="parent">
        {data.map((item, key) => {
          return (
            <div key={key}>
              {children(item.icon, item.color, item.title, item.desc, true)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
