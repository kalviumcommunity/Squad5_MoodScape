import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function SinglePost() {
  const { id } = useParams();
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/routes");
        setPosts(response.data.reduce((acc, curr) => {
          acc[curr.ID] = curr;
          return acc;
        }, {}));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (id && posts[id]) {
      setPost(posts[id]);
    } else {
      setPost(null);
    }
  }, [id, posts]);

  return (
    <div>
      {post ? (
        <div className="entity-card">
          <h2>{post.ID}</h2>
          <img src={post.Links} alt="person" />
          <h3>Poster: {post.poster}</h3>
          <h3>Song Name: {post.songName}</h3>
          <h3>Artist: {post.artist}</h3>
          <h3>Song Length: {post.songLength}</h3>
          <h3>Album Name: {post.albumName}</h3>
          <h3>Genre: {post.genre}</h3>
          <h3>Mood: {post.mood}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
