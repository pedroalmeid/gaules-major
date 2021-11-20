import { Container, Hero, Texts, Photos } from "./styles";
import { Information } from "../Information";

import gaulesCirclePhotoImg from "../../assets/GaulesCirclePhoto.png";
import pglCircleLogoImg from "../../assets/PglCircleLogo.png";

export const Content = () => {
  return (
    <Container>
      <Hero>
        <Texts>
          <h1>
            O <span>mundial</span> de CS:GO transmitido pelo{" "}
            <span>fenômeno</span> das streams
          </h1>
          <p>
            Recheado de times representando o Brasil e de muita vitória moral,
            confira como acompanhar o maior evento do ano na maior stream
            brasileira de CS:GO.
          </p>
        </Texts>
        <Photos>
          <img src={gaulesCirclePhotoImg} alt="Gaules" />
          <img src={pglCircleLogoImg} alt="PGL Stockholm 2021 Major" />
        </Photos>
      </Hero>

      <Information />
    </Container>
  );
};
