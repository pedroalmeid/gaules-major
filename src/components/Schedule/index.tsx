import { Container, Wrapper } from "./styles";

import { Matches } from "../Matches";

import { BsTwitch } from "react-icons/bs";

interface IScheduleProps {
  logo: string;
  title: string;
  twitchLink: string;
  description: string;
  mainStream: boolean;
}

export const Schedule = (props: IScheduleProps) => {
  return (
    <Container mainStream={props.mainStream}>
      <Wrapper mainStream={props.mainStream}>
        <header>
          <div>
            <img src={props.logo} alt={props.twitchLink} />
            <h2>{props.title}</h2>
          </div>
          <a
            href={`https://${props.twitchLink}`}
            target="_blank"
            rel="noreferrer"
          >
            <span>{props.twitchLink}</span>
            <BsTwitch size="24px" color={props.mainStream ? "#0090D9" : "#FFFFFF"} />
          </a>
        </header>

        <p>{props.description}</p>

        <Matches mainStream={props.mainStream} />
      </Wrapper>
    </Container>
  );
};
