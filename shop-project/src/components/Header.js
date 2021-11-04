import React from "react";
import { ContainerStyled } from "./styles/Container.styled";
import { HeaderStyled } from "./styles/Header.styled";
import { Logo } from "./styles/Header.styled";
import { Nav } from "./styles/Header.styled";
import { useEffect } from "react";
import NavLinks from "./NavLinks";

export default function Header() {
  useEffect(() => {}, []);
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Nav>
          <Logo src="./img/Logo.svg" alt="logo" />
          <NavLinks />
        </Nav>
      </ContainerStyled>
    </HeaderStyled>
  );
}
