// Playlist.js
import React from 'react';

function Playlist() {
  // Mock data for demonstration
  const playlistData = [
    { id: 1, name: 'Playlist 1', songs: ['Song 1', 'Song 2', 'Song 3'] },
    { id: 2, name: 'Playlist 2', songs: ['Song 4', 'Song 5', 'Song 6'] },
    // Add more playlists here
  ];

  return (
    <div className="playlist">
      {playlistData.map(playlist => (
        <div key={playlist.id} className="playlist__item">
          <h3>{playlist.name}</h3>
          {/* Display list of songs */}
          <ul>
            {playlist.songs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
