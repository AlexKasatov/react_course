import { ThemeProvider } from "styled-components";
import React from "react";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { useEffect } from "react";
import content from "./content";
import Card from "./components/Card";
import uuid from "react-uuid";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  useEffect(() => {
    document.title = "Hundle";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return <Card key={uuid()} item={item} />;
          })}
        </Container>

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
