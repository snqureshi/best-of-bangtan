import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteSong } from "../services/api-helper";
import "./Details.css";

export default function Details(props) {
  const [song, setSong] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const exactSong = props.songs.find((song) => {
      return song.id === params.id;
    });
    setSong(exactSong);
  }, [params.id, props.songs]);

  const handleDelete = async () => {
    await deleteSong(song.id);
    props.setToggle((curr) => !curr);
    history.push("/");
  };

  return (
    <div>
      {song && song.fields ? (
        <>
          <h1>SONG INFORMATION PAGE</h1>
          <div className="details-full">
            <div className="details-title">
              <h2>Song Title:{song.fields.title}</h2>
            </div>
            <div className="details-video">
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
            <div className="details-right">
              <div className="details-text">
                <h3>Artist: {song.fields.artist}</h3>
                <h4>Year of Release: {song.fields.year}</h4>
                <h4>Duration: {song.fields.duration}</h4>
              </div>
              <div className="details-spotify">
                <iframe
                  src={song.fields.spotify}
                  width="220"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
            <div className="details-review">
              <h3>Favorite Lyrics: {song.fields.lyric}</h3>
              <h3>Overall Review: {song.fields.review}</h3>
              <h3>Overall Rating(out of 10): {song.fields.rating}</h3>
              <h3>Review By: {song.fields.author}</h3>
            </div>
            <button className="details-button" onClick={handleDelete}>
              Delete Me!
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
