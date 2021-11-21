import { Brand } from "../Brand";

import { Container, Wrapper, Credits, Social } from "./styles";

import {
  BsEnvelopeFill,
  BsYoutube,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Credits>
          <Brand />
          <div>
            <p>
              © Copyright 2021 - Gaules Corp. - Todos os direitos reservados
            </p>
            <p>
              Designed by{" "}
              <a href="https://www.behance.net/pedroalmeida58">Pedro Almeida</a>
            </p>
          </div>
        </Credits>
        <Social>
          <a href="mailto:contato@gaules.tv" target="_blank" rel="noreferrer">
            <span>contato@gaules.tv</span>
            <BsEnvelopeFill size="1.5rem" color="0090D9" />
          </a>
          <a
            href="https://www.youtube.com/c/Gaules"
            target="_blank"
            rel="noreferrer"
          >
            <span>Gaules</span>
            <BsYoutube size="1.5rem" color="0090D9" />
          </a>
          <a
            href="https://www.instagram.com/gaules"
            target="_blank"
            rel="noreferrer"
          >
            <span>@gaules</span>
            <BsInstagram size="1.5rem" color="0090D9" />
          </a>
          <a href="https://twitter.com/Gaules" target="_blank" rel="noreferrer">
            <span>@Gaules</span>
            <BsTwitter size="1.5rem" color="0090D9" />
          </a>
        </Social>
      </Wrapper>
    </Container>
  );
};
