import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import AddItems from "./admin-components/Additems";
import uuid from "react-uuid";
import ItemListAdmin from "./admin-components/ItemListAdmin";

const Shop = () => {
  const { loader, post } = useFetch();
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  const productName = useRef(null);
  const productDesc = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setValid("Введите Название");
      return;
    }

    if (!desc) {
      setValid("Введите Описание");
    }

    if (desc && item) {
      post("https://covid-shop-mcs.herokuapp.com", { name: name, desc: desc });

      setItem([...item, { id: uuid(), name: name, desc: desc }]);
      setName("");
      setDesc("");
      setValid("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleDeleteItem = (id) => {
    setItem(item.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <AddItems
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
        refName={productName}
        refDesc={productDesc}
        name={name}
        desc={desc}
      />
      {!item && <h3>Добавьте Первый товар</h3>}

      {item && <ItemListAdmin onDeleteItem={handleDeleteItem} item={item} />}
    </div>
  );
};

export default Shop;
