import React from "react";
import { addNewSong } from "../services/api-helper";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";

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
    <div className="container">
      <h3 className="form-title">Tell Us About Your Favorite BTS Song</h3>
      <form onSubmit={handleSubmit} className="form">
        <div classname="form-container">
          <div classname="title-container">
            <label htmlFor="title" className="title-label">
              Name of Song:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div classname="artist-container">
            <label htmlFor="artist" className="artist">
              Name of Artist:
            </label>
            <input
              id="artist"
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            />
          </div>
          <div classname="year-container">
            <label htmlFor="year" className="year">
              Year of Release:
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </div>
          <div classname="duration-container">
            <label htmlFor="duration" className="duration">
              Duration of Song:
            </label>
            <input
              id="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div classname="video-container">
            <label htmlFor="video" className="video">
              Youtube Embed Link:
            </label>
            <input
              id="video"
              type="text"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
          <div classname="spotify-container">
            <label htmlFor="spotify" className="spotify">
              Spotify Embed Link:
            </label>
            <input
              id="spotify"
              type="text"
              value={spotify}
              onChange={(e) => setSpotify(e.target.value)}
            />
          </div>
          <div classname="lyric-container">
            <label htmlFor="lyric" className="lyric">
              Favorite Lyrics:
            </label>
            <textarea
              id="lyric"
              type="text"
              value={lyric}
              onChange={(e) => setLyric(e.target.value)}
            />
          </div>
          <div classname="review-container">
            <label htmlFor="review" className="review">
              Overall Review:
            </label>
            <textarea
              id="review"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div classname="rating-container">
            <label htmlFor="rating" className="rating">
              Overall Rating:
            </label>
            <input
              id="rating"
              type="number"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </div>
          <div classname="author-container">
            <label htmlFor="author" className="author">
              Reviewed By:
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <button className="form-button" type="submit">
            BORAHAE
          </button>
        </div>
      </form>
    </div>
  );
}
