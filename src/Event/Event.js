import React from "react";
import "./Event.css";

export default function Event(props) {
  return (
    <>
      <div className="table-cell">{props.name}</div>
      <div className="table-cell">{props.date}</div>
      <div className="table-cell">{props.city}</div>
      <div className="table-cell">{props.state}</div>
      <div className="table-cell">{props.organization}</div>
      <div className="table-cell">{props.link}</div>
    </>
  );
}
