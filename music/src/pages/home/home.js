import React from 'react'
import './home.css'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
//import SidebarButton from '../../sitebar/sidebarButton';

export default function Home() {
  return (
    <div className='ScreenContainer'>
      <img src="" alt="" />
      <div className="library-body">
        <div className="playlist-card">
        <img
              src="https://as1.ftcdn.net/v2/jpg/02/23/60/54/1000_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">Playlist title</p>
            <p className="playlist-subtitle">playlist subtitle</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
                
              </IconContext.Provider>
            </div>
        </div>

      </div>
      
    </div>
  )
}
