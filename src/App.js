import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Advice #</h1>
        <p> text </p>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="./images/pattern-divider-desktop.svg"
          />
          <img src="./images/pattern-divider-mobile.svg" />
        </picture>
      </div>
    </div>
  );
}

export default App;
