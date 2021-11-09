import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");
  const [loader, setLoader] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoader(true);

    if (!name) {
      setValid("Введите название");
      return;
    }

    if (!desc) {
      setValid("Введите описание ");
      return;
    }

    if (name && desc) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({ name: name, desc: desc }),
        headers: { "Content-type": "application/json" },
      };

      fetch("https://covid-shop-mcs.herokuapp.com", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoader(false);
          console.log("finale");
        });
    }

    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc,
      },
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      {loader && <p>Подгружаю...</p>}
      <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
