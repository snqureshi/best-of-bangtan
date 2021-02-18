import { useState } from "react";
import React from "react";
import "./Search.css";

//Worked on this code during typeahead workshop
const Search = (props) => {
  const [title, setTitle] = useState("");
  const filteredSongs = props.songs.filter((song) =>
    song.fields.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search By Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="typeahead-results">
        {title &&
          filteredSongs.map((song) => <p key={song.id}>{song.fields.title}</p>)}
      </div>
    </div>
  );
};

export default Search;
