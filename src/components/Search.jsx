import { useState } from "react";
import React from "react";
import "./Search.css";

//Worked on this code during typeahead workshop
const Search = (props) => {
  const [year, setYear] = useState(0);
  const filteredYears = props.songs.filter(
    (song) => song.fields.year.includes === year
  );

  return (
    <div className="search-bar">
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <div className="typeahead-results">
        {year &&
          filteredYears.map((song) => <p key={song.id}>{song.fields.year}</p>)}
      </div>
    </div>
  );
};

export default Search;
