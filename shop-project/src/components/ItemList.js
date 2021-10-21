import React from "react";
import Item from "./Item";
import uuid from "react-uuid";
export default function ItemList(props) {
  return (
    <ul key={uuid()} className="shop">
      {props.items.map((itemObj) => (
        <>
          <li key={uuid()}>
            <Item info={itemObj} />
            <button onClick={() => props.onDeleteItem(itemObj.id)}>
              Удалить Товар
            </button>
          </li>
        </>
      ))}
    </ul>
  );
}
