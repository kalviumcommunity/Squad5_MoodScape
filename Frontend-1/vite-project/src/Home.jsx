// Home.js
import React from 'react';
import Playlist from "./playlist.jsx";

function Home() {
  return (
    <div className="home">
      <h2>Recommended Playlists</h2>
      <Playlist />
      {/* Display other sections like New Releases, etc. */}
    </div>
  );
}

export default Home;
