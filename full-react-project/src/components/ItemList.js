import React from "react";
import Items from "./Items";
import uuid from "react-uuid";

const ItemList = ({ items, onDeleteProduct }) => {
  return (
    <ul>
      {items.map((itemObj) => {
        return (
          <li key={itemObj.id}>
            <Items info={itemObj} />
            <button onClick={() => onDeleteProduct(itemObj.id)}>
              Удалить Товар
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
