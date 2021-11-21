import { Container } from "./styles";

import majorLogoImg from "../../assets/MajorLogo.png";
import liquipediaImg from "../../assets/Liquipedia.png";
import hltvImg from "../../assets/Hltv.png";

export const Tournament = () => {
  return (
    <Container>
      <div>
        <h2>Acompanhe a tabela e os resultados do torneio</h2>
        <nav>
          <a
            href="https://liquipedia.net/counterstrike/PGL/2021/Stockholm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={liquipediaImg} alt="Liquipedia" />
          </a>
          <a
            href="https://www.hltv.org/events/4866/pgl-major-stockholm-2021"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hltvImg} alt="HLTV.org" />
          </a>
        </nav>
      </div>
      <img src={majorLogoImg} alt="PGL Major Stockholm 2021" />
    </Container>
  );
};
