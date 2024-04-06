import React from 'react'
import './scarch.css'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Scarch() {
  return (
    <div className=''>
     <div className="wrap">
    <div className="search">
      <input type="text" className="searchTerm" id="input_text"></input>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>scarch
      </button>
    </div>
  </div>
     <div className='ScreenContainer'>
      
     </div>
    </div>
  )
}
