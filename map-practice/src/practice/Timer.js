import React from "react";
import { useState, useEffect } from "react";

export default function Timer() {
  const [timekeeper, setTimekeeper] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timerId = setTimeout(() => {
        setTimekeeper((prev) => prev + 1);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  function handleClickStart() {
    setStart((prev) => !prev);
    // !start ? setStart(true) : setStart(false) 
    // либо так
  }

  function handleResetTimer() {
    setTimekeeper(0);
    setStart(false);
  }

  return (
    <>
      <h2>{timekeeper}</h2>
      <button onClick={handleClickStart}>Старт / Пауза</button>
      <button onClick={handleResetTimer}>Стоп</button>
    </>
  );
}
