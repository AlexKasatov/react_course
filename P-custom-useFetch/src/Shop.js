import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);

  const { get, loader } = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="shop">
      {loader && <h3>Загружаем...</h3>}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
