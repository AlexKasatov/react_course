import React, { useState, useEffect } from "react";

export default function ItemsPractice() {
  const [items, setItems] = useState([]);

  useEffect((parameters) => {
      if(items.length === 0) {
          document.title = `Добавьте Первый Товар`
      } else if (items.length === 1) { 
          document.title = `Добавлен: 1 товар`
      } else {
          document.title = `Добавлено: ${items.length} товаров`
      }
  })

  function handleButtonClick() {
    setItems([...items, { id: items.length }]);
  }

  return (
    <>
      <h2>Всего товаров: {items.length}</h2>
      <button onClick={handleButtonClick}>Добавить товар</button>
    </>
  );
}
