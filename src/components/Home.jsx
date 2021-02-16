import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      {props.songs.map((song) => (
        <Link key={song.id} to={`/songs/${song.id}`}>
          <div>
            <h3>{song.fields.title}</h3>
          </div>
          {/* <div>
            <iframe
              width="560"
              height="315"
              src={song.fields.video}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div> */}
        </Link>
      ))}
    </div>
  );
}
