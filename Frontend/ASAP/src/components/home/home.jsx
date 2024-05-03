// Home.jsx
import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container">
      <div className="entity-container">
        {data &&
          data.map((post) => (
            <div key={post.ID} className="entity-card">
              <h2>{post.ID}</h2>
              <img src={post.poster} alt="person" />
              <h3>songName: {post.songName}</h3>
              <h3>artist: {post.artist}</h3>
              <h3>songLength: {post.songLength}</h3>
              <h3>albumName: {post.albumName}</h3>
              <h3>genre: {post.genre}</h3>

              <Link to={`/post/${post.ID}`}>View Post</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
