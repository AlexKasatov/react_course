import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const Cardsload = () => {
  const [cards, setCards] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setCards(data.cards);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  if(loader) {
      return <Loader/>
  }

  return (
    <>
      <h1>Карты: </h1>
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

export default Cardsload;
