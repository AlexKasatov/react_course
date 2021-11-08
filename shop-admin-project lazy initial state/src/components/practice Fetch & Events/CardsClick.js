import React, { useState, useEffect } from "react";

const Cardsclick = () => {
  const [cards, setCards] = useState();
  const [loader, setLoader] = useState(false);

  function handleButtonClick() {
    setLoader(true);
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCards(data.cards);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoader(false)
        console.log("finish");
      });
  }

  return (
    <>
      <button disabled={loader} onClick={handleButtonClick}>
        Загрузить
      </button>
      {loader && <p>Загружаю....</p>}
      <h1>Карты:</h1>
      <ul>
        {cards &&
          cards.map((card) => (
            <li key={card.code}>
              {card.value} of {card.suit}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cardsclick;
