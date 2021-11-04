import styled from "styled-components";

export const ItemListStyled = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;

  li {
    list-style-type: none;
  }


  .delete-button {
    background-color: #ec0000;
    border: none;
    padding: 10px 40px;
    font-size: 16px;
    margin-top: 16px;
    color: white;
  }
`;


