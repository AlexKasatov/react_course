import React from "react";
import { LinksNavStyled } from "./styles/NavLinks.styled";

export default function NavLinks() {
  return (
    <LinksNavStyled>
      <ul>
        <li>
          <a href="">Contact</a>{" "}
        </li>
        <li>
          <a href="">About Us</a>{" "}
        </li>
        <li>
          <a href="">Login</a>{" "}
        </li>
      </ul>
    </LinksNavStyled>
  );
}
