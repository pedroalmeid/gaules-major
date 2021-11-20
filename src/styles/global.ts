import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #060715;
    --crayola-blue: #0090D9;
    --silver: #C4C4C4;
    --space-blue: #212342;
    --xiketic-blue: #090A1F;
    --heliotrope-purple: #CF69FF;
    --honolulu-blue: #006DA3;
  }
	
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	
  html {
    // 16px = default desktop font-size

    @media (max-width: 1880px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
	
	body, input, textarea, button {
    font-family: 'Prompt', sans-serif;
		font-weight: 400;
    color: white;
  }
	
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
    line-height: 100%
	}

  button {
    cursor: pointer;
    font-size: 1rem;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
