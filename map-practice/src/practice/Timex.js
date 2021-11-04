import React from "react";
import { useState, useEffect } from "react";

export default function Timex() {
  const [timekeeper, setTimekeeper] = useState(0);
  const [startstop, setStartstop] = useState(true);

  useEffect(() => {
    if (startstop) {
      let timerId = setTimeout(() => {
        setTimekeeper((prev) => prev + 1);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  function handleButtonClick() {
    setStartstop((prev) => !prev);
  }

  return (
    <>
      <h2>{timekeeper}</h2>
      <button onClick={handleButtonClick}>Старт/Стоп</button>
    </>
  );
}
