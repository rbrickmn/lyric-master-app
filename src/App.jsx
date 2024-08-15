import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [searchArtist, setSearchArtist] = useState(""); // Store the artist after search
  const [searchSong, setSearchSong] = useState(""); // Store the song after search
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  function getLyrics() {
    // Check if either the artist or song input is empty
    if (artist === "" || song === "") {
      setErrorMessage("Please enter both an artist and a song.");
      return;
    }

    // Reset error message if inputs are valid
    setErrorMessage("");

    axios
      .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((response) => {
        setLyrics(response.data.lyrics);
        setSearchArtist(artist); // Set the artist after search
        setSearchSong(song); // Set the song after search
        setArtist(""); // Clear artist input
        setSong(""); // Clear song input
      })
      .catch((error) => {
        // Handle errors from the API, e.g., if the lyrics are not found
        setErrorMessage("Lyrics not found. Please try another song.");
      });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      getLyrics();
    }
  }

  function clearSearch() {
    setArtist("");
    setSong("");
    setSearchArtist("");
    setSearchSong("");
    setLyrics("");
    setErrorMessage(""); // Reset error message
  }

  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <a href="">
            <h1>
              LyricMaster{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e926dd"
                className="logo"
              >
                <path d="M160-320v-480 480ZM80-80v-720q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v17q-24 11-44 27t-36 36v-80H160v480h440v-160q16 20 36 36t44 27v97q0 33-23.5 56.5T600-240H240L80-80Zm160-320h160v-80H240v80Zm520-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-207h160v80h-80v240q0 50-35 85t-85 35Zm-520-40h280v-80H240v80Zm0-120h280v-80H240v80Z" />
              </svg>
            </h1>
          </a>

          <input
            className="inp"
            type="text"
            placeholder="Artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <input
            className="inp"
            type="text"
            placeholder="Song name"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn" onClick={getLyrics}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
          <button className="btn clear-btn" onClick={clearSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </button>
        </div>

        {/* Display error message if there's an error */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <pre>
          <h2>
            {/* If there is nothing searched, do not display anything */}
            {lyrics === "" ? "" : searchArtist + " - " + searchSong}
          </h2>

          {/* If there are no lyrics, do not display anything */}
          {lyrics === "" ? "" : lyrics}
        </pre>
      </div>
    </>
  );
}

export default App;
