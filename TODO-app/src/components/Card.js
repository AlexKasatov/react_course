import React from "react";
import "./Card.css"

export default function Card(props) {
  if (props.onLoadCard) {
    props.onLoadCard();
  }

  return (
    <div className="card">
      <h1>First Name</h1>
      <h1>Last Name</h1>
      <p>Hi I'm Alex, designer and developer</p>
      <button onClick={props.onClickCard}>Click Me!</button>
    </div>
  );
}
