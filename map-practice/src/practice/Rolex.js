import React from "react";
import { useState, useEffect } from "react";

//state-переменная создает новый экземпляр Date(), которой доступен метод toLocaleTimeString()

export default function Rolex() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h2>{date.toLocaleTimeString()}</h2>;
}
