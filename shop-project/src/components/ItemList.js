import React from "react";
import Item from "./Item";
import uuid from "react-uuid";
import {ItemListStyled} from "./styles/ItemList.styled"
export default function ItemList(props) {
  return (
    <ItemListStyled key={uuid()} className="shop">
      {props.items.map((itemObj) => (
        <>
          <li key={uuid()}>
            <Item info={itemObj} />
            <button className="delete-button" onClick={() => props.onDeleteItem(itemObj.id)}>
              Удалить Товар
            </button>
          </li>
        </>
      ))}
    </ItemListStyled>
  );
}
