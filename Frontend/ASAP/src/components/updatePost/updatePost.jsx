import React, { useState, useEffect } from "react";
import axios from "axios";

export function UpdatePost() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("ID");
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    ID: "",
    poster: "",
    songName: "",
    artist: "",
    songLength: "",
    albumName: "",
    genre: "",
    mood: ""
  });
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/routes");
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = (post) => {
    setFormData(post);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.songName || !formData.artist) {
      setSubmitMessage("Please fill in all fields.");
      return;
    }
    try {
      await axios.put(
        `http://localhost:3000/routes/Update/${formData.ID}`,
        formData
      );
      setSubmitMessage("Post updated successfully!");
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Update failed:", error);
      setSubmitMessage("An error occurred while updating the post.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/routes/${searchOption}/${searchQuery}`);
      setSearchResults([response.data]);
      setSubmitMessage(""); // Clear submit message on successful search
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
      setSubmitMessage("Post not found.");
    }
  };

  return (
    <div>
      <h2>Search for Post to Update</h2>
      <div>
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="ID">ID</option>
          <option value="songName">Song Name</option>
          <option value="artist">Artist</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchOption}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((post) => (
            <div key={post._id}>
              <p>ID: {post.ID}</p>
              <p>Song Name: {post.songName}</p>
              <p>Artist: {post.artist}</p>
              {/* Add more fields here */}
              <button onClick={() => handleUpdateClick(post)}>Update</button>
            </div>
          ))
        ) : (
          <p>No matching posts found.</p>
        )}
      </div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="songName"
          value={formData.songName}
          placeholder="Song Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          placeholder="Artist"
          onChange={handleChange}
        />
        <input
          type="text"
          name="poster"
          value={formData.poster}
          placeholder="Poster"
          onChange={handleChange}
        />
        <input
          type="text"
          name="songLength"
          value={formData.songLength}
          placeholder="Song Length"
          onChange={handleChange}
        />
        <input
          type="text"
          name="albumName"
          value={formData.albumName}
          placeholder="Album Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mood"
          value={formData.mood}
          placeholder="Mood"
          onChange={handleChange}
        />
        <button type="submit">Update Post</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}
