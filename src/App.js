import "./App.css";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import Advice from "./components/Advice";
import Dice from "./components/AdviceGenerator";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Advice #</h1>
        <Advice />
        <picture>
          <source media="(min-width:768px)" srcSet={dividerDesktop}></source>
          <img src={dividerMobile} />
        </picture>
        <Dice />
      </div>
    </div>
  );
}

export default App;
