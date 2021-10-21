import React, {useState} from 'react'
import uuid from "react-uuid"
import Item from './Item';

export default function Shop() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
  
    //рендерим товары содеражщие стейт [items]
    const itemList = items.map((itemObj) => {
      console.log(itemObj);
      return (
        <li key={itemObj.id}>
          <Item info={itemObj} />
          <button onClick={() => handleDeleteItem(itemObj.id)}>
            Удалить Товар
          </button>
        </li>
      );
    });
  
    //удаляем товар из массива и обновляем state [items]
    const handleDeleteItem = (id) => {
      const newItem = items.filter((itemObj) => {
        return itemObj.id !== id;
      });
      setItems(newItem);
    };
  
    //сабмитим форму и обновляем стейт [items] введеным пользователем товаром
    function handleFormSubmit(e) {
      setItems([{ name, desc, id: uuid() }, ...items]); //Добавляем новый массив содержащий обьект с новыми state'тами
      e.preventDefault();
      setName("");
      setDesc("");
      return;
    }
  
    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="item-name"> Название Товара </label>
            <input
              id="item-name"
              type="text"
              placeholder="Название товара"
              className="textfield"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="item-desc">Описание Товара</label>
            <input
              id="item-desc"
              type="text"
              placeholder="Описание товара"
              className="textfield"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-footer">
            <div className="validation"></div>
            <p style={name && desc ? { display: "none" } : { display: "block" }}>
              {" "}
              <span role="img" aria-label="!!">
                ‼️
              </span>{" "}
              Не все поля товаров заполнены{" "}
              <span role="img" aria-label="!!">
                ‼️
              </span>{" "}
            </p>
            <input
              type="submit"
              className="btn-basic"
              value="Добавить"
              // disabled={name ? !desc : true}
              disabled={name && desc ? false : true}
            />
          </div>
        </form>
  
        <div
          style={items.length > 0 ? { display: "none" } : { display: "block" }}
        >
          <p>Добавьте первый товар</p>
        </div>
        <ul className="shop">{itemList}</ul>
      </>
    );
  }
  

