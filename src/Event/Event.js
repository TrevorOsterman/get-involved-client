import React from "react";

export default function Event(props) {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.organization}</td>
      <td>{props.link}</td>
    </>
  );
}
