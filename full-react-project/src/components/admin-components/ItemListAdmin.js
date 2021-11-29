import React from "react";
import ItemAdmin from "./ItemAdmin";

const ItemListAdmin = ({item, onDeleteItem}) => {
  return (
    <ul>
      {item.map((itemObj) => (
        <li key={itemObj.id}>
          <ItemAdmin info={itemObj} />
          <button onClick={() => onDeleteItem(itemObj.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemListAdmin;
