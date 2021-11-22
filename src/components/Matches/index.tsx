import { useEffect, useState } from "react";
import { request } from "graphql-request";

import { Container, Match, GameDay } from "./styles";

import { ITeam } from "../TeamSlider";

interface IMatch {
  id: string;
  time: string;
  teams: ITeam[];
}

interface IGameDay {
  id: string;
  date: string;
  matches: IMatch[];
}

interface IMatchesProps {
  mainStream: boolean;
}

export const Matches = ({ mainStream }: IMatchesProps) => {
  const [gameDays, setGameDays] = useState<IGameDay[]>([]);

  useEffect(() => {
    const fetchGameDays = async () => {
      const { gameDays } = await request(
        "https://api-us-east-1.graphcms.com/v2/ckvvaesni1m3c01xw5wpmeqjk/master",
        `
        {
          gameDays {
            id
            date
            matches(where: {mainStream: ${mainStream}}, orderBy: time_ASC) {
              id
              time
              teams {
                name
                logo {
                  url
                }
              }
            }
          }
        }
        `
      );

      setGameDays(gameDays);
    };

    fetchGameDays();
  }, [mainStream]);

  return (
    <Container>
      {gameDays.map((gameDay) => (
        <GameDay mainStream={mainStream}>
          <header>
            {new Date(gameDay.date).getUTCDate()}/
            {new Date(gameDay.date).getMonth()}
          </header>
          <>
            {gameDay.matches.map((match) => (
              <Match>
                <img
                  src={match.teams[0].logo.url}
                  alt={match.teams[0].name}
                  width="40px"
                  height="40px"
                />
                <div>
                  <span>VS</span>
                  <p>{match.time}</p>
                </div>
                <img
                  src={match.teams[1].logo.url}
                  alt={match.teams[1].name}
                  width="40px"
                  height="40px"
                />
              </Match>
            ))}
          </>
        </GameDay>
      ))}
    </Container>
  );
};
