import { Brand } from "../Brand";

import { Container, Wrapper } from "./styles";

import { BsTwitch } from "react-icons/bs";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Brand />
        <a href="https://www.twitch.tv/gaules" target="_blank" rel="noreferrer">
          <BsTwitch size="2rem" color="0090D9" />
          <p>Ao vivo</p>
        </a>
      </Wrapper>
    </Container>
  );
};
