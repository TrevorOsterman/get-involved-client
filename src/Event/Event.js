import React from "react";
import "./Event.css";

export default function Event(props) {
  const { name, date, city, state, org, link } = props;
  return (
    <>
      {[name, date, city, state].map((key, idx) => {
        return (
          <div key={idx} className="table-cell" style={{ order: idx }}>
            {key}
          </div>
        );
      })}
    </>
  );
}
