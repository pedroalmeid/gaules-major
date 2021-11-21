import { Container } from "./styles";

import gaulesImg from "../../assets/Gaules.png";

export const Brand = () => {
  return (
    <Container>
      <img src={gaulesImg} alt="Gaules" />
      <span>X</span>
      <span>PGL Major Stockholm 2021</span>
    </Container>
  );
};
