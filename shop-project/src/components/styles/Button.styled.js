import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.size};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 16px 60px;
  background-color: #000;
  color: #ffff;

  &:hover {
    background-color: #0042ec;
  }
`;
