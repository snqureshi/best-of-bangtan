import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./Search.css";

//Worked on the typeahead code during typeahead workshop & used it for rendering results instead
const Search = (props) => {
  const [title, setTitle] = useState("");

  const filteredSongs = props.songs.filter((song) =>
    song.fields.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <div>
      <form className="search-bar">
        <label htmlFor="title">Search By Song Title:</label>
        <input
          className="search-box"
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <div className="search-results-container">
        {filteredSongs.map((song) => (
          <Link key={song.id} to={`/songs/${song.id}`}>
            <div className="search-title">
              <h3>{song.fields.title}</h3>
            </div>
            <div className="search-video">
              {/* https://support.google.com/youtube/answer/171780?hl=en */}
              <iframe
                width="560"
                height="315"
                src={song.fields.video}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
