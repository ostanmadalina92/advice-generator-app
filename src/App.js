import "./App.css";
import dice from "./images/icon-dice.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Advice #</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
        <picture>
          <source media="(min-width:768px)" srcSet={dividerDesktop}></source>
          <img src={dividerMobile} />
        </picture>
        <button className="dice-icon">
          <img src={dice} />
        </button>
      </div>
    </div>
  );
}

export default App;
