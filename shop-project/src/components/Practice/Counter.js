import React, { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Счетчик: ${counter}`;
  });

  function handleButtonClick() {
    setCounter((prev) => prev + 1);
  }

  return <button onClick={handleButtonClick}>{counter}</button>;
}
