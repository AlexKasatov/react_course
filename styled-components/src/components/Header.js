import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt=""></Logo>
          <Button >Try It Free</Button>
        </Nav>

        <Flex>
            <div>
                <h1>Build The Communitiy Your fans Will Love</h1>
                <p>Suspendisse risus dolor, condimentum eu nisl vulputate, accumsan mollis lectus. Sed sodales lectus in eros efficitur, nec vehicula neque condimentum. Nunc neque ex, pellentesque quis odio et, ultrices malesuada nisl. Pellentesque ante augue, lacinia id egestas in, molestie ut risus. Phasellus mollis vel felis quis laoreet. Aenean rhoncus tincidunt sem. Maecenas dignissim et tortor at luctus. Praesent velit nibh, cursus quis molestie id, ullamcorper nec massa. Nunc ullamcorper blandit risus eget sagittis. Aenean vestibulum enim sit amet velit vulputate elementum. Etiam lorem sapien, maximus in eros vel, fermentum pellentesque ipsum. Curabitur ut maximus magna, eu venenatis tortor.</p>

                <Button bg="#ff0099" color="#fff">
                    Get Started For Free
                </Button>
            </div>

            <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
