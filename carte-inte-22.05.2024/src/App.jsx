import { useState } from "react";
import "./App.css";

function App() {
  const [bgImageUrl, setBgImageUrl] = useState(
    "https://source.unsplash.com/random?numbers"
  );
  const [title, setTitle] = useState("Mathématiques");
  const [smallText, setSmallText] = useState("A+");

  return (
    <>
      <div className="card-wrapper">
        <div className="card-top">
          <img src={bgImageUrl} alt="bg" />
          <div className="empty"></div>
        </div>
        <div className="card-bottom">
          <p>
            <span>{smallText}</span>
          </p>
          <h1>{title}</h1>
        </div>
      </div>

      <form>
        <label htmlFor="bgImageUrl">Background Image URL:</label>
        <input
          type="text"
          id="bgImageUrl"
          value={bgImageUrl}
          onChange={(e) => setBgImageUrl(e.target.value)}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="smallText">Small Text:</label>
        <input
          type="text"
          id="smallText"
          value={smallText}
          onChange={(e) => setSmallText(e.target.value)}
        />
      </form>

      <a href="https://github.com/maxencelav/doodles/carte-inte-22.05.2024" target="_blank">
        Voir le code source
      </a>
    </>
  );
}

export default App;
