import React from "react";
import { FormStyled } from "./styles/Form.Styled";

export default function AddItem(props) {
  return (
    <FormStyled onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name"> Название Товара </label>
        <input
          id="item-name"
          type="text"
          placeholder="Название товара"
          className="textfield"
          value={props.name}
          onChange={(e) => props.onSetName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="item-desc">Описание Товара</label>
        <input
          id="item-desc"
          type="text"
          placeholder="Описание товара"
          className="textfield"
          value={props.desc}
          onChange={(e) => props.onSetDesc(e.target.value)}
        />
      </div>
      <div className="form-footer">
        <div className="validation">
          <p
            style={
              props.name && props.desc
                ? { display: "none" }
                : { display: "block" }
            }
          >
            {" "}
            <span role="img" aria-label="!!">
              ‼️
            </span>{" "}
            Не все поля товаров заполнены{" "}
            <span role="img" aria-label="!!">
              ‼️
            </span>{" "}
          </p>
        </div>
      </div>
      <div>
        <input
          type="submit"
          id="submit-form"
          className="btn-basic"
          value="Добавить"
          // disabled={name ? !desc : true}
          disabled={props.name && props.desc ? false : true}
        />
      </div>
    </FormStyled>
  );
}
