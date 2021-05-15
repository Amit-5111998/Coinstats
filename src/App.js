// import './App.css';
// import NavBar from './Navbar/Navba';
// function App() {
//   return (
//     <div >
//       <NavBar/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import NavBar from "./Navbar/Navba";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainsec from "./MainSec/mainsec";
import Pricing from "./Pricing/pricing";
//import Subnav from "./MainSec/subnav";
import Login from "./Login/Login";
import { Route } from "react-router-dom";
import Getstarted from "./Login/Getstarted";
import Alert from "./Alerts/Alert";
//import PopupExample from "./Alerts/model";
import CreateAccount from "./Login/CreateAccount";
import Portfoliotracker from "./PortfolioTracker/Portfoliotracker";
import Question from "./question";
import Nave from "./Navbar/nave";
import Header from "./CurrencyPages/Header";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
 // toggler button for theme changer 
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Nave ColorChanger={() => themeToggler()} thema={theme} />

        <switch>
          <Route exact path="/">
            <Mainsec thema={theme}/>
          </Route>
          <Route path="/login">
            <Login thema={theme}/>
          </Route>
          <Route path="/pricing">
            <Pricing thema={theme} />
          </Route>
          <Route path="/getstarted">
            <Getstarted thema={theme} />
          </Route>
          <Route path="/alert">
            <Alert />
          </Route>
          <Route path="/createaccount">
            <CreateAccount thema={theme}/>
          </Route>
          <Route path="/portfoliotracker">
            <Portfoliotracker />
          </Route>
          <Route path="/currheader">
            <Header/>
          </Route>
        </switch>
        {/* <Header/> */}

        <Footer thema={theme} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

{
  /* <button onClick={() => themeToggler()}>Change Theme</button>  */
}
