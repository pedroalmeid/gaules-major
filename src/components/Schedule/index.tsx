import { Container, Wrapper } from "./styles";

import {Matches} from "../Matches"

import { BsTwitch } from "react-icons/bs";

import gaulesIconImg from "../../assets/GaulesIcon.png";

export const Schedule = () => {
  return (
    <Container>
      <Wrapper>
        <header>
          <div>
            <img src={gaulesIconImg} alt="Gaules" />
            <h2>O Nosso Cronograma</h2>
          </div>
          <a href="https://twitch.tv/gaules" target="_blank" rel="noreferrer">
            <span>twitch.tv/gaules</span>
            <BsTwitch size="24px" color="0090D9" />
          </a>
        </header>

        <p>
          Acompanhe as principais partidas e os jogos dos times brasileirinhos
          nas Watch Parties mais divertidas, engraçadas e torcedoras!{" "}
        </p>

        <Matches />
      </Wrapper>
    </Container>
  );
};
