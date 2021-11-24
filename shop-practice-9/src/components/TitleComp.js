import React, { useState } from "react";
import usePageTitle from "../custom-hooks/UsePageTitle";

export default function TitleComp() {
  const [total, setTotal] = useState(0);

  usePageTitle(`Счет ${total}`);

  function handleMoreClick() {
    setTotal((prev) => prev + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal((prev) => prev - 1);
    }
  }

  return (
    <>
      <h2>{total}</h2>
      <button onClick={handleMoreClick}>+</button>
      <button onClick={handleLessClick}>–</button>
    </>
  );
}
