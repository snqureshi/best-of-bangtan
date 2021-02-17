import React from "react";
import { addNewSong } from "../services/api-helper";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [video, setVideo] = useState("");
  const [spotify, setSpotify] = useState("");
  const [lyric, setLyric] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [author, setAuthor] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      records: [
        {
          fields: {
            title,
            artist,
            year: parseInt(year),
            duration,
            video,
            spotify,
            lyric,
            review,
            rating: parseInt(rating),
            author,
          },
        },
      ],
    };
    await addNewSong(formData);
    props.setToggle((curr) => !curr);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Name of Song:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <label htmlFor="artist">Name of Artist:</label>
      <input
        id="artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <br />
      <label htmlFor="year">Year of Release:</label>
      <input
        id="year"
        type="number"
        value={year}
        onChange={(event) => setYear(event.target.value)}
      />
      <br />
      <label htmlFor="duration">Duration of Song:</label>
      <input
        id="duration"
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <br />
      <label htmlFor="video">Youtube Embed Link:</label>
      <input
        id="video"
        type="text"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="spotify">Spotify Embed Link:</label>
      <input
        id="spotify"
        type="text"
        value={spotify}
        onChange={(e) => setSpotify(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="lyric">Favorite Lyrics:</label>
      <textarea
        id="lyric"
        type="text"
        value={lyric}
        onChange={(e) => setLyric(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="review">Overall Review:</label>
      <textarea
        id="review"
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="rating">Overall Rating:</label>
      <input
        id="rating"
        type="number"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />{" "}
      <br />
      <label htmlFor="author">Reviewed By:</label>
      <input
        id="author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />{" "}
      <br />
      <button type="submit">CLICK CLICK BANG BANG</button>
    </form>
  );
}
