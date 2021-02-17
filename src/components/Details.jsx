import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details(props) {
  const [song, setSong] = useState({});
  const params = useParams();

  useEffect(() => {
    const exactSong = props.songs.find((song) => {
      return song.id === params.id;
    });
    setSong(exactSong);
  }, [params.id, props.songs]);

  return (
    <div>
      {song && song.fields ? (
        <>
          <h1>SONG INFORMATION PAGE</h1>
          <h2>{song.fields.title}</h2>
          <div className="details-video">
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
          <div className="info-container">
            <h3>{song.fields.artist}</h3>
            <h4>{song.fields.year}</h4>
            <h4>{song.fields.duration}</h4>
            <div className="details-spotify">
              <iframe
                src={song.fields.spotify}
                width="220"
                height="80"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
          <div className="review-container">
            <h3>Favorite Lyrics: {song.fields.lyric}</h3>
            <h3>Overall Review: {song.fields.review}</h3>
            <h3>Overall Rating(out of 10): {song.fields.rating}</h3>
            <h3>Review By: {song.fields.author}</h3>
          </div>
        </>
      ) : null}
    </div>
  );
}
