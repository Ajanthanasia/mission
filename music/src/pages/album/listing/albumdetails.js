import React from "react";
import "./albumlisting.css";
import "./../../home/home.css";

export default function Albumdetails() {
  const artistList = [
    { key: 1, artist: "Aniruth" },
    { key: 2, artist: "A.R.Rahuman" },
    { key: 3, artist: "Jonitha" },
    { key: 4, artist: "Aniruth" },
    { key: 5, artist: "A.R.Rahuman" },
    { key: 6, artist: "Jonitha" },
    { key: 7, artist: "Aniruth" },
    { key: 8, artist: "A.R.Rahuman" },
    { key: 9, artist: "Jonitha" },
  ];
  function Album(props) {
    return (
      <div className="playlist-card">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/23/60/54/1000_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
          className="playlist-image"
          alt="Playlist-Art"
        />
        <p className="playlist-title">Artist</p>
        <p className="playlist-subtitle">{props.artist}</p>
        <div className="playlist-fade"></div>
      </div>
    );
  }
  return (
    <div className="ScreenContainer">
      <div className="library-body">
        {artistList.map((item) => (
          <Album key={item.key} artist={item.artist}></Album>
        ))}
      </div>
    </div>
  );
}
