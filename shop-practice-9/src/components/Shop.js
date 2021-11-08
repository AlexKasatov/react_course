import { useState, useEffect } from "react";
import Items from "./Items";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          setItems(data);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(true);
        console.log("finale");
      }
    })();
  }, []);

  const itemList = items.map((itemObj) => {
    return (
      <ul key={uuid()}>
        <li key={uuid()}>
          <Items info={itemObj} />
          <button>Удалить Товар</button>
        </li>
      </ul>
    );
  });

  return <>{itemList}</>;
}
