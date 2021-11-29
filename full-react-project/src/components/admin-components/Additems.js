import React from "react";

const AddItems = ({ onFormSubmit, refName,refDesc, name, desc,onNameChange, onDescChange, valid }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="product-name">Введите Название</label>
      <input
        ref={refName}
        value={name}
        onChange={onNameChange}
        id="product-name"
        type="text"
        placeholder="Product Name"
      />
      <label htmlFor="product-desc">Введите Описание</label>
      <input
        ref={refDesc}
        value={desc}
        onChange={onDescChange}
        id="product-desc"
        type="text"
        placeholder="Product Desc"
      />
      <div>
        <div>{valid}</div>
        <input type="submit" value="Добавить" />
        </div>
      
    </form>
  );
};

export default AddItems;
