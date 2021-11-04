import styled from "styled-components";

export const LinksNavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 40px;
    
  }

  li {
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      font-weight: bold;
      transition: 0.8;
    }
  }
`;
