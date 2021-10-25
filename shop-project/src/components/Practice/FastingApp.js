import React, { useState, useEffect } from "react";

export default function FastingApp() {
  const [fast, setFast] = useState(18);

  useEffect(() => {
    if (fast < 20) {
      document.title = `Фастинг: ${fast} часов`;
    } else {
      document.title = `Проконсультируйтесь с врачом!`;
    }
  });

  function handleMoreClick() {
    if (fast < 23) {
      setFast((prev) => prev + 1);
    }
  }

  function handleLessClick() {
    if (fast > 16) {
      setFast((prev) => prev - 1);
    }
  }

  return (
    <>
      <h2>
        Схема фастинга: {fast} / {24 - fast}
      </h2>
      <button onClick={handleMoreClick}>+</button>
      <button onClick={handleLessClick}>-</button>
    </>
  );
}
