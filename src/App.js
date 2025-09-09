import logo from "./logo.png";
import "./App.css";
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
          This project was coded by{" "}
          <a
            href="https://github.com/vcheungg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vivian Cheung
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/vcheungg/react-dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github.
          </a>{" "}
          and{" "}
          <a
            href="https://v-dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
