import { useState, useEffect } from "react";

const Button101 = () => {
  const [count, setCount] = useState(0);

  // *Используем useEffect, чтобы вывывести актальное значение стейт-перемнной count, так как обновление стейтов ассинхронное

  useEffect(() => {
    if (count > 0) {
      console.log(count);
    }
  }, [count]);
  function handleButtonClick() {
    setCount((prev) => prev + 5);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>+5</button>
    </>
  );
};

export default Button101;
