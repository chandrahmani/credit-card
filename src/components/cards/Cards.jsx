import { useState } from "react";
import { cardsModel } from "../../model";
import AddCard from "../addCard/AddCard";
import Card from "./Card";

const Cards = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const [cards, setCard] = useState(data);

  // console.log(data);

  const handleDelete = (index) => {
    console.log(index);
    const cardClone = [...cards];

    cardClone.splice(index, 1);

    setCard(cardClone);
    localStorage.setItem("data", JSON.stringify(cardClone));
  };

  return (
    <>
      <AddCard setCard={setCard} cards={cards} />

      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div key={index}>
            <Card card={card}></Card>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
