import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [load, setLoad] = useState(0);
  const [page, setPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [artist, setArtist] = useState(null);

  const indexOfLastPost = page * recordPerPage;
  const indexOfFirstPost = indexOfLastPost - recordPerPage;
  const currentList = artistList.slice(indexOfFirstPost, indexOfLastPost);

  const pageList = artistList.length / recordPerPage;

  function onClickAlbum(id) {
    console.log(id);
  }

  function Album(item) {
    const details = item.props;
    return (
      <Link to={`./single-album/${details.key}`} className="playlist-card">
        <div key={details.key}>
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/23/60/54/1000_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">Artist</p>
          <p className="playlist-subtitle">{details.artist}</p>
          <div className="playlist-fade"></div>
        </div>
      </Link>
    );
  }
  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (
    <>
      {/* {isActive ? <div> {artist}</div> : null} */}
      <div className="ScreenContainer">
        <div className="library-body">
          {currentList.map((item, index) => (
            <Album key={index} props={item}></Album>
          ))}
          {/* <button onClick={nextPage}>next page</button> */}
          <br></br>
          <div className="row">
            <button className="btn" onClick={prevPage}>
              Prev Page
            </button>
            <button className="btn" onClick={nextPage}>
              next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
