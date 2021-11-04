import "./App.css";
import React, { useState } from "react";
import Shop from "./components/Shop";
import Counter from "./components/Practice/Counter";
import FastingApp from "./components/Practice/FastingApp";
import ItemsPractice from "./components/Practice/ItemsPractice";
import SitNext from "./components/Practice/SitNext";
import Scroll from "./components/Practice/Scroll";
import Multibrand from "./components/Practice/Multibrand";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/Global";
import Header from "./components/Header";
import { ButtonStyled } from "./components/styles/Button.styled";
import { ContainerStyled } from "./components/styles/Container.styled";
import { FlexStyled } from "./components/styles/Flex.styled";
import Button101 from "./components/Practice/Button101";
import Coinlist from "./components/Practice/CoinList";
import Paypal from "./components/Practice/Paypal";
import Counterstorage from "./components/Practice/CounterStorage";

const theme = {
  colors: {
    header: "blue",
    shop: "white",
    footer: "black",
  },
  mobile: "768px",
  size: "24px",
};

function App() {
  const [auth, setAuth] = useState(false);
  function handleAuthClick() {
    auth === false ? setAuth(true) : setAuth(false);
  }
  if (auth === true) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <Header />
          <ContainerStyled>
            <FlexStyled>
              <Shop />
              <ButtonStyled onClick={handleAuthClick}>Log Out</ButtonStyled>
            </FlexStyled>
            {/* Footer */}
          </ContainerStyled>
        </>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ContainerStyled>
          <FlexStyled>
            <h2>Нужно залогиниться!</h2>
            <ButtonStyled onClick={handleAuthClick}>Log In</ButtonStyled>
            <Button101/>
            <Coinlist/>
            <Paypal/>
            <Counterstorage/>
            {/* Footer */}
          </FlexStyled>
        </ContainerStyled>
      </ThemeProvider>
    </>
  );
}

export default App;
