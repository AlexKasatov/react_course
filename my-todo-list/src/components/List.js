import React from "react";
import "../List-style.css";

export default function List({ itemList, updateItemList }) {
  const deleteItemFromList = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  };

  console.log("props");
  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div className="item">
            <p>{itemObj.item}</p>
            <button onClick={() => deleteItemFromList(itemObj.key)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
