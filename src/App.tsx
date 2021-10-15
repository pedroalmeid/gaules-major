import { Header } from "./components/Header";
import { Content } from "./components/Content";

import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <GlobalStyle />
    </div>
  );
};
