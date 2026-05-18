import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Funmi77"
              target="_blank"
              rel="noopener noreferrer"
            >
              Funmilayo Fagbemi
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Funmi77/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
