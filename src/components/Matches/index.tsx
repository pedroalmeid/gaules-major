import { useEffect, useState } from "react";
import { request } from "graphql-request";

import { Container } from "./styles";

import { ITeam } from "../TeamSlider";

interface IMatch {
  id: string;
  mainStream: boolean;
  date: Date;
  teams: ITeam[];
}

export const Matches = () => {
  const [matches, setMatches] = useState<IMatch[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const { matches } = await request(
        "https://api-us-east-1.graphcms.com/v2/ckvvaesni1m3c01xw5wpmeqjk/master",
        `
        {
          matches(where: {mainStream: true}) {
            id
            teams {
              name
              logo {
                url
              }
            }
            date
          }
        }
        `
      );

      setMatches(matches);
    };

    fetchMatches();
  }, []);

  console.log(matches);

  return (
    <Container>
      <tr>
        <th>26/10</th>
        <th>27/10</th>
        <th>28/10</th>
        <th>29/10</th>
      </tr>
      <tr>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
        <td>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
          <div>
            <span>VS</span>
            <p>15:00</p>
          </div>
          <img
            src="https://media.graphcms.com/JjOdgmXrTH2puW5M6evo"
            width="40px"
            alt="Liquid"
            height="40px"
          />
        </td>
      </tr>
    </Container>
  );
};
