import React, { useState } from "react";
import axios from "axios";

export function AddPost() {
  const [formData, setFormData] = useState({
    ID: "",
    poster: "",
    songName: "",
    artist: "",
    songLength: "",
    albumName: "",
    genre: "",
    mood: "",
    created_by: "" // Changed from "created by" to "created_by"
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/routes/Create", formData);
      setSubmitMessage("Submission successful!");
      setFormData({
        ID: "",
        poster: "",
        songName: "",
        artist: "",
        songLength: "",
        albumName: "",
        genre: "",
        mood: "",
        created_by: "" // Ensure consistency
      });
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Submit New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Poster:</label>
          <input
            type="text"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Song Name:</label>
          <input
            type="text"
            name="songName"
            value={formData.songName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Artist:</label>
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Song Length:</label>
          <input
            type="text"
            name="songLength"
            value={formData.songLength}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Album Name:</label>
          <input
            type="text"
            name="albumName"
            value={formData.albumName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mood:</label>
          <input
            type="text"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>created by:</label>
          <input
            type="text"
            name="created_by" // Changed from "created by" to "created_by"
            value={formData.created_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}
