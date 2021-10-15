import { Container, Wrapper } from "./styles";

import { BsTwitch } from "react-icons/bs";

import gaulesImg from "../../assets/Gaules.png";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src={gaulesImg} alt="Gaules" />
          <span>X</span>
          <span>PGL Major Stockholm 2021</span>
        </div>
        <a href="https://www.twitch.tv/gaules" target="_blank" rel="noreferrer">
          <BsTwitch size="24px" color="0090D9" />
          <p>Ao vivo</p>
        </a>
      </Wrapper>
    </Container>
  );
};
