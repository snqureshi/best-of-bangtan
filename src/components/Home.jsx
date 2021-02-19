import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="results-container">
      {props.songs.map((song) => (
        <Link key={song.id} to={`/songs/${song.id}`}>
          <div className="ind-result">
            <div className="title">
              <h3>{song.fields.title}</h3>
            </div>
            <div className="video">
              {/* https://support.google.com/youtube/answer/171780?hl=en */}
              <iframe
                width="560"
                height="315"
                src={song.fields.video}
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
