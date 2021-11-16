import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Schedule } from "./components/Schedule";

import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Schedule />
      <GlobalStyle />
    </div>
  );
};
