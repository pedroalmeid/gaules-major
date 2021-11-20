import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Schedule } from "./components/Schedule";

import { GlobalStyle } from "./styles/global";

import gaulesIconImg from "./assets/GaulesIcon.png";
import gaulesTVIconImg from "./assets/GaulesTVIcon.png";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Schedule
        logo={gaulesIconImg}
        title="O Nosso Cronograma"
        twitchLink="twitch.tv/gaules"
        description="Acompanhe as principais partidas e os jogos dos times brasileirinhos nas Watch Parties mais divertidas, engraçadas e torcedoras!"
        mainStream
      />
      <Schedule
        logo={gaulesTVIconImg}
        title="E na GaulesTV?"
        twitchLink="twitch.tv/gaulestv"
        description="Com jogos alternativos e transmissões voltadas à narração e comentários profissionais, veja as streams do nosso canal secundário."
        mainStream={false}
      />
      <GlobalStyle />
    </div>
  );
};
