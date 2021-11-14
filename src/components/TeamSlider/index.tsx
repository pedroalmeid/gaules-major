import { useEffect, useState } from "react";
import { request } from "graphql-request";

import { Slider } from "./styles";

interface ITeam {
  id: string;
  logo: {
    url: string;
  };
  name: string;
}

export const TeamSlider = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const { teams } = await request(
        "https://api-us-east-1.graphcms.com/v2/ckvvaesni1m3c01xw5wpmeqjk/master",
        `
        { 
          teams {
            id
            logo {
              url
            }
            name
          }
        }
        `
      );
      setTeams(teams);
    };

    fetchTeams();
  }, []);

  return (
    <Slider>
      {teams.map((team) => (
        <img src={team.logo.url} alt={team.name} key={team.id} />
      ))}
    </Slider>
  );
};
