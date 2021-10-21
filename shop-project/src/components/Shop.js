import React, { useState } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  //удаляем товар из массива и обновляем state [items]
  const handleDeleteItem = (id) => {
    const newItem = items.filter((itemObj) => {
      return itemObj.id !== id;
    });
    setItems(newItem);
  };

  //сабмитим форму и обновляем стейт [items] введеным пользователем товаром
  function handleFormSubmit(e) {
    setItems([
      {
        name,
        desc,
        id: uuid(),
        image: "https://source.unsplash.com/400x300/?street,wear",
      },
      ...items,
    ]); //Добавляем новый массив содержащий обьект с новыми state'тами
    e.preventDefault();
    setName("");
    setDesc("");
    return;
  }

  return (
    <>
      <AddItem
        onFormSubmit={handleFormSubmit}
        onSetName={setName}
        onSetDesc={setDesc}
        desc={desc}
        name={name}
      />

      <div
        style={items.length > 0 ? { display: "none" } : { display: "block" }}
      >
        <p>Добавьте первый товар</p>
      </div>
      <ItemList onDeleteItem={handleDeleteItem} items={items} />
    </>
  );
}