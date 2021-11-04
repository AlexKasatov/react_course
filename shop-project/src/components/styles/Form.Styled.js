import styled from "styled-components";
import { ButtonStyled } from './Button.styled';

export const FormStyled = styled.form`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  label {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
  }

  input {
      margin: 20px;
      padding:10px;
      text-align: center;
      font-size: 16px;
  }

  #submit-form {
    font-size: 16px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 150px;
    padding: 10px 40px;
    background-color: #000;
    color: #ffff;


    &:hover {
      background-color: #0042ec;
    }
  }
`;
