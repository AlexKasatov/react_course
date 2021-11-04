import { useState, useEffect } from "react";

const Counterstorage = () => {
    const [count, setCount] = useState(() => {
    const value = localStorage.getItem("count")
    if (value === undefined) {
      return 0
    }
    return Number.parseInt(value, 10)
  })

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

export default Counterstorage;
