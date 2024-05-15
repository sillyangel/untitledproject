import React, { useState, useEffect } from 'react';
import styles from '../styles/songselector.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Songselector() {
  const [albums, setAlbums] = useState([]);
  // make albumIndex
  

  useEffect(() => {
    fetch('json/songs.json')
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.albums);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
  }, []); 

  // albumsec Function (You'll need to define this)
  const albumsec = (albumIndex) => {
    // Your logic for handling album clicks
    console.log("Clicked album:", albums[albumIndex]); 
  }

  return (
    <div id={styles.songselector}>
      <h2>Home</h2>
      <div id={styles.user}>
        <FontAwesomeIcon icon={faUser} />
        <span id="username">Not Logged In</span>
      </div>
      <div id="farts">
      {albums.map((album, albumIndex) => (
  <>
    {albumIndex === 0 || albums[albumIndex - 1].artist !== album.artist ? (
      <div key={album.artist} className="artist-header">
        <h1>{album.artist}</h1>
      </div>
    ) : null}
    {albums[albumIndex - 1].artist === album.artist ? (
      <div key={album.album} className={styles.albumcontainer}>
        <button onClick={() => albumsec(albumIndex)}>
          <img src={album.cover} alt={album.album} className={styles.albumcover} />
        </button>
      </div>
    ) : null}
  </>
))}

      </div>
      <div id="single"></div>
    </div>
  );
}

export default Songselector;