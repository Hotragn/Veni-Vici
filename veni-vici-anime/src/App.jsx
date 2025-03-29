import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentAnime, setCurrentAnime] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("one-piece"); // Default theme

  const fetchAnime = async () => {
    setLoading(true);
    let attempts = 0;
    let animeData = null;

    while (attempts < 10) {
      try {
        // Fetch random anime from Jikan API
        const response = await fetch("https://api.jikan.moe/v4/anime");
        const data = await response.json();

        // Randomly select an anime from the result
        const randomAnime =
          data.data[Math.floor(Math.random() * data.data.length)];

        // Extract relevant data
        const animeObject = {
          image: randomAnime.images.jpg.image_url,
          title: randomAnime.title,
          genre:
            randomAnime.genres.length > 0 ? randomAnime.genres[0].name : "Unknown",
          synopsis: randomAnime.synopsis || "No synopsis available.",
          type: randomAnime.type || "Unknown",
        };

        // Check if any attribute is banned
        if (
          !banList.includes(animeObject.genre) &&
          !banList.includes(animeObject.type)
        ) {
          animeData = animeObject;
          break;
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
      attempts++;
    }

    if (animeData) {
      setCurrentAnime(animeData);
      setHistory((prevHistory) => [animeData, ...prevHistory]);
    } else {
      alert(
        "No anime found that isn't banned. Consider removing some attributes from your ban list."
      );
    }
    setLoading(false);
  };

  const toggleBan = (attribute) => {
    if (banList.includes(attribute)) {
      setBanList(banList.filter((item) => item !== attribute));
    } else {
      setBanList([...banList, attribute]);
    }
  };

  const handleThemeChange = () => {
    setTheme(theme === "one-piece" ? "naruto" : "one-piece");
  };

  return (
    <div className={theme}>
      {/* History Section */}
      <div className="history">
        <h2>History</h2>
        {history.length === 0 ? (
          <p>No history yet.</p>
        ) : (
          history.map((anime, index) => (
            <div key={index} className="card">
              <img src={anime.image} alt={anime.title} />
              <p>
                <strong>{anime.title}</strong>
              </p>
              <p>Genre: {anime.genre}</p>
              <p>Type: {anime.type}</p>
            </div>
          ))
        )}
      </div>

      {/* Main Section */}
      <div className="main">
        <h1>Anime Diaries</h1>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={fetchAnime}
            disabled={loading}
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            {loading ? "Loading..." : "Discover Anime!"}
          </button>
          <button
            onClick={handleThemeChange}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginLeft: "10px",
            }}
          >
            Toggle Theme
          </button>
        </div>

        {currentAnime && (
          <div className="api-container">
            <div className="api-image-container">
              <img src={currentAnime.image} alt="Random Anime" />
            </div>
            <div className="api-anime-details">
              {/* Clickable attributes */}
              <p>
                Genre:{" "}
                <strong
                  onClick={() => toggleBan(currentAnime.genre)}
                  style={{ cursor: "pointer" }}
                >
                  {currentAnime.genre}
                </strong>
              </p>
              <p>
                Type:{" "}
                <strong
                  onClick={() => toggleBan(currentAnime.type)}
                  style={{ cursor: "pointer" }}
                >
                  {currentAnime.type}
                </strong>
              </p>
              <p><strong>{currentAnime.title}</strong></p>
              <p>{currentAnime.synopsis}</p>
            </div>
          </div>
        )}
      </div>

      {/* Ban List Section */}
      <div className="ban-list">
        <h2>Ban List</h2>
        <h4>(click to remove)</h4>
        {banList.length === 0 ? (
          <p>No banned attributes.</p>
        ) : (
          banList.map((attribute, index) => (
            <button
              key={index}
              onClick={() => toggleBan(attribute)}
              style={{
                cursor: "pointer",
                marginBottom: "5px",
                border: "1px solid #ddd",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#f2c464",
                color: "#000",
              }}
            >
              {attribute} (Remove)
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
