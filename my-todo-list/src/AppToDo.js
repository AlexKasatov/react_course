import React, { useState } from "react";
import "./App.css";
import uuid from 'react-uuid'
import List from "./components/List";

function AppToDo() {
  const [currentItem, setCurrentItem] = useState(null); // наш главный лист куда будут добавлятся itemList
  const [itemList, updateItemList] = useState([]); // то что вводит юзер

  const handleOnChange = (e) => {
    setCurrentItem(e.target.value);
    console.log(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([{item: currentItem, key: uuid()}, ...itemList]);
    console.log("text", itemList);
    setCurrentItem("");
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} type="text" onChange={handleOnChange} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/> 
          {/* через пропсы доступ даем */}
        </div>
      </header>
    </div>
  );
}

export default AppToDo;
