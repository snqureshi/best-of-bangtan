import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-results-container">
      {props.songs.map((song) => (
        <Link key={song.id} to={`/songs/${song.id}`}>
          <div className="ind-result">
            <div className="home-title">
              <h3>{song.fields.title}</h3>
            </div>
            <div className="home-video">
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
          </div>
        </Link>
      ))}
    </div>
  );
}
