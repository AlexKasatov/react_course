import { useState, useEffect } from "react";

const Card = () => {
  const [card, setCard] = useState();

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCard(data.cards[0]);
      });
  }, []);

  if (!card) {
    return null;
  }

  return (
    <>
      <p>
        Карта: {card.value} of {card.suit}
      </p>
    </>
  );
};

export default Card;
