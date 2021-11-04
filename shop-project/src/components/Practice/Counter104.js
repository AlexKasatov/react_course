import React, { useState, useEffect } from "react";

const Counter104 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  function handleAddClick() {
    setCount((prev) => prev + 1);
  }

  function handleSubClick() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleSubClick}>-</button>
    </>
  );
};

export default Counter104;
