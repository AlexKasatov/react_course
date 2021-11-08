import React, { useState, useEffect } from "react";

const Cardnew = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);
      });
  }, []);

  return (
    <>
      <h1>Карты: </h1>
      <ul>
        {cards && cards.map((card) => (
          <li key={card.code}>
            {card.value} of {card.suit}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cardnew;
