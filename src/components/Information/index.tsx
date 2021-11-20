import { Container, Dates } from "./styles";
import { TeamSlider } from "../TeamSlider";

export const Information = () => {
  return (
    <Container>
      <div>
        <h2>Equipes</h2>
        <TeamSlider />
      </div>

      <div>
        <h2>Datas</h2>
        <Dates>
          <tr>
            <td>
              <label>Challengers Stage</label>
            </td>
            <td>
              <p>De 26/10/2021</p>
              <p>Até 29/10/2021</p>
            </td>
          </tr>
          <tr>
            <td>
              <label>Legends Stage</label>
            </td>
            <td>
              <p>De 30/10/2021</p>
              <p>Até 02/11/2021</p>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Champions Stage <br /> (Playoffs)
              </label>
            </td>
            <td>
              <p>De 04/11/2021</p>
              <p>Até 07/11/2021</p>
            </td>
          </tr>
        </Dates>
      </div>
    </Container>
  );
};
