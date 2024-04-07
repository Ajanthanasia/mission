import React, { useState } from "react";
import "./home.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
//import SidebarButton from '../../sitebar/sidebarButton';
// import mySong from "D:/xampp/htdocs/github/mission/task-02/music-app/src/music/Katchi_Sera.mp3";
import mySong from "C:/xampp/htdocs/github/mission/music/src/songs/Katchi-Sera.mp3";
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(mySong);
  const [audio] = useState(new Audio(mySong));

  const toggleAudio = () => {
    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
    } else if (!isPlaying && audio) {
      audio.play();
      setIsPlaying(true);
    }
  };
  function SongView() {
    return (
      <div className="playlist-card">
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/23/60/54/1000_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
          className="playlist-image"
          alt="Playlist-Art"
        />
        <p className="playlist-title">Playlist title</p>
        <p className="playlist-subtitle">playlist subtitle</p>
        <div className="playlist-fade" onClick={toggleAudio}>
          <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </IconContext.Provider>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="ScreenContainer">
        <img src="" alt="" />
        <div className="library-body">
          <SongView />
          <SongView />
          <SongView />
          <SongView />
        </div>
      </div>
    </>
  );
}
