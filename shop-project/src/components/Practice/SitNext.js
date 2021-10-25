import React, { useEffect, useState } from "react";

export default function SitNext() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Привет!";
    const timerId = setTimeout(() => {
      document.title = "Я подсяду?";
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <>
      <h2>Обновлений стейта: {counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Обновить стейт
      </button>
    </>
  );
}
