import { useState } from "react";
import AppContext from "../AppContext";
import { createGlobalStyle } from "styled-components";
import { Colors } from "../src/components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.darkMode ? props.Colors.VeryDarkBlue : props.Colors.VeryLightGray};
    color: ${(props) =>
      props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue};
    font-family: 'Rubik', sans-serif;
  }
  a{
    color:inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state: {
          darkMode: darkMode,
        },
        setDarkMode: setDarkMode,
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;800&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle Colors={Colors} darkMode={darkMode} />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
