import React from "react";
import Home from "../home/home";
import Scarch from "../scarch/scarch";
import Gener from "../gener/gener";
import Artistdetails from "../artist/details/artistdetails";
import Artistlisting from "../artist/listing/artistlisting";
import Albumdetails from "../album/details/albumdetails";
import Albumlisting from "../album/listing/albumdetails";
import Sidebar from "../../sitebar";
import "../home/home.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Base() {
  return (
    <div>
      <Router>
        <div className="MainPage">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scarch" element={<Scarch />} />
            <Route path="/gener" element={<Gener />} />
            <Route path="/artistdetails" element={<Artistdetails />} />
            <Route path="/artistlisting" element={<Artistlisting />} />
            <Route path="/albumlisting" element={<Albumlisting />} />
            <Route path="/albumdetails" element={<Albumdetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
